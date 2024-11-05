import styled from "styled-components";
import { videoListState } from "atoms/videoListState";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { List } from "types/list";
import { colors } from "theme";
import { getSearch } from "api";
import { useMockList } from "utils/getMockList";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const setVideoList = useSetRecoilState(videoListState);
  const [keyword, setKeyword] = useState<string>("");
  const { getMockList } = useMockList();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const getVideoList = async () => {
    try {
      const res = await getSearch(keyword ? keyword : "플레이리스트");
      const newList: List[] = res.map((it: any) => {
        return {
          id: it.id.videoId,
          title: it.snippet.title,
          channelTitle: it.snippet.channelTitle,
          channelId: it.snippet.channelId,
        };
      });
      setVideoList(newList);
    } catch (e) {
      alert('검색량을 초과했습니다.');
      getMockList();
    }
  };

  return (
    <Form>
      <Input
        placeholder="검색어를 입력하세요."
        value={keyword}
        onChange={handleChange}
      />
      <Button type="button" onClick={getVideoList}>
        <Search />
      </Button>
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  display: flex;
  gap: 0.3125rem;

  width: 100%;
  padding-left: 0.4375rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.625rem 1.25rem;

  border-radius: 1.25rem;
  background-color: ${colors.grey};

  font-size: 16px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Search = styled(IoSearch)`
  width: 1.5rem;
  height: 1.5rem;
`;
