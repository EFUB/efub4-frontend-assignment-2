import styled, { css } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { favoriteListState, videoListState } from "atoms/videoListState";
import SearchBar from "./SearchBar";
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { colors } from "theme";

const Header = ({ title, type }: { title: string; type?: string }) => {
  const navigate = useNavigate();
  const setVideoList = useSetRecoilState(videoListState);
  const setFavoritesList = useSetRecoilState(favoriteListState);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const handleClickHome = () => {
    navigate("/");
  };
  const handleClickDelete = () => {
    setFavoritesList([]);
    setVideoList((prev) =>
      prev.map((item) => {
        return { ...item, clicked: false };
      })
    );
  };
  const handleClickHeart = () => {
    navigate("/favorites");
  };
  const handleClickSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <Layout>
      {type === "my" ? (
        <>
          <Button onClick={handleClickHome}>
            <Home />
          </Button>
          <Label>{title}</Label>
          <Button type="button" onClick={handleClickDelete}>
            <Trash />
          </Button>
        </>
      ) : (
        <>
          <Button onClick={handleClickHeart}>
            <Heart />
          </Button>
          {isSearch ? (
            <SearchBar />
          ) : (
            <>
              <Label>{title}</Label>
              <Button type="button" onClick={handleClickSearch}>
                <Search />
              </Button>
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;

  padding: 0.625rem 1.25rem;
  height: 3.125rem;

  background-color: white;
  box-shadow: 0px 3px 5px -1px rgba(83, 60, 60, 0.15);
`;
const Label = styled.label`
  width: 100%;
  text-align: center;

  font-size: 17px;
  font-weight: 600;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const iconStyle = css`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${colors.grey300};
`;
const Home = styled(AiFillHome)`
  ${iconStyle}
`;
const Trash = styled(FaTrashAlt)`
  ${iconStyle}
  width: 1.4rem;
  height: 1.4rem;
`;
const Search = styled(IoSearch)`
  ${iconStyle}
`;
const Heart = styled(GoHeartFill)`
  ${iconStyle}
`;
