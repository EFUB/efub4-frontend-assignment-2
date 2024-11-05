import styled from "styled-components";
import { favoriteListState } from "atoms/videoListState";
import { useRecoilValue } from "recoil";
import { List } from "types/list";
import Header from "components/Header";
import ListItem from "components/ListItem";

const FavoritePage = () => {
  const favoritelist: List[] = useRecoilValue(favoriteListState);

  return (
    <>
      <Header title="내 플레이리스트" type="my" />
      <Layout>
        <Container>
          {favoritelist.length > 0 ? (
            favoritelist.map((it) => <ListItem it={it} />)
          ) : (
            <Label>아직 좋아요한 영상이 없어요.</Label>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default FavoritePage;

const Layout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  padding: 0.625rem 1.25rem;
  min-height: calc(100svh - 90px);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 100%;
  padding: 1.25rem 0;
`;
const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 0.875rem;
`;
