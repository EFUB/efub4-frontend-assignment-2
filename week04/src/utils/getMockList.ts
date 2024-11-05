import { videoList } from "api/mock";
import { videoListState } from "atoms/videoListState";
import { useSetRecoilState } from "recoil";

export const useMockList = () => {
  const setVideoList = useSetRecoilState(videoListState);

  const getMockList = () => {
    const list = videoList.map((it: any) => {
      return {
        id: it.id.videoId,
        title: it.snippet.title,
        channelTitle: it.snippet.channelTitle,
        channelId: it.snippet.channelId,
      };
    });

    setVideoList(list);
  };

  return { getMockList };
};
