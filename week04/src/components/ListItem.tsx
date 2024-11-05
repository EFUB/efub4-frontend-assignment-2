import styled from "styled-components";
import { colors } from "theme";
import { List } from "types/list";
import { GoHeartFill } from "react-icons/go";
import { useSetRecoilState } from "recoil";
import { favoriteListState, videoListState } from "atoms/videoListState";

type Props = {
  it: List;
};

const ListItem = ({ it }: Props) => {
  const setFavoritesList = useSetRecoilState(favoriteListState);
  const setVideoList = useSetRecoilState(videoListState);

  const handleClickHeart = () => {
    if (it.clicked) {
      setFavoritesList((prev) => prev.filter((item) => item.id !== it.id));
      setVideoList((prev) =>
        prev.map((item) =>
          item.id === it.id ? { ...item, clicked: false } : item
        )
      );
    } else {
      setFavoritesList((prev) => [...prev, { ...it, clicked: true }]);
      setVideoList((prev) =>
        prev.map((item) =>
          item.id === it.id ? { ...item, clicked: true } : item
        )
      );
    }
  };

  return (
    <Layout>
      <VideoWrapper>
        <Video src={`https://www.youtube.com/embed/${it.id}`} />
      </VideoWrapper>
      <Container>
        <ImgWrapper>
          <Button onClick={handleClickHeart}>
            <Heart $clicked={it.clicked || false} />
            <Label>추가</Label>
          </Button>
        </ImgWrapper>
        <Wrapper>
          <Title>{it.title}</Title>
          <Content>{it.channelTitle}</Content>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default ListItem;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
`;
const VideoWrapper = styled.div`
  aspect-ratio: 16/ 9;
`;
const Video = styled.iframe`
  width: 100%;
  height: 100%;

  border-radius: 1.25rem;
  border: none;
`;
const Container = styled.div`
  display: flex;
  gap: 0.625rem;
`;
const ImgWrapper = styled.div`
  margin-top: 0.1875rem;

  width: 2.25rem;
  height: 2.25rem;

  border-radius: 50%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
`;
const Title = styled.label`
  word-break: break-all;
  overflow-wrap: break-word;
`;
const Content = styled.label`
  color: ${colors.grey200};
  font-size: 14px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 0.5625rem;
  color: ${colors.grey200};
`;
const Heart = styled(GoHeartFill)<{ $clicked: boolean }>`
  width: 25px;
  height: 25px;

  fill: ${({ $clicked }) => ($clicked ? "black" : `${colors.grey}`)};
`;
