import styled from "styled-components";
import { List } from "types/list";
import { useEffect } from "react";
import { useMockList } from "utils/getMockList";
import { useRecoilValue } from "recoil";
import { videoListState } from "atoms/videoListState";
import ListItem from "components/ListItem";
import Header from "components/Header";

const MainPage = () => {
  const videolist: List[] = useRecoilValue(videoListState);
  const { getMockList } = useMockList();

  useEffect(() => {
    if (videolist.length === 0) {
      getMockList();
    }
  }, [videolist]);

  return (
    <>
      <Header title="오늘의 플리" />
      <Layout>
        <Container>
          {videolist.length > 0 ? (
            videolist.map((it) => <ListItem it={it} />)
          ) : (
            <Label>영상을 검색해보세요.</Label>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default MainPage;

const Layout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  padding: 0.625rem 1.25rem;
  min-height: calc(100svh - 5.625rem);
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
