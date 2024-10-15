import styled from "styled-components";
import thumbnail from "../../assets/ic_thumbnail.png";
import { Cast } from "../../types/movieDetailProps";

interface Props {
  cast: Cast;
}

// 각 영화 배우 컴포넌트
const CastItem = ({ cast }: Props) => {
  return (
    <Wrapper>
      <ActorImage
        src={cast.url_small_image ? cast.url_small_image : thumbnail}
        alt={cast.name}
      />
      <ActorText>
        <div className="castName">{cast.name}</div>
        <div className="characterName">{cast.character_name}</div>
      </ActorText>
    </Wrapper>
  );
};

export default CastItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ActorImage = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

const ActorText = styled.div`
  .castName {
    font-size: 16px;
    font-weight: 400;
    color: var(--font);
  }

  .characterName {
    font-size: 13px;
    font-weight: 400;
    color: var(--subgrey);
  }
`;
