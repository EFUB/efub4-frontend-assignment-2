import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { List } from "types/list";

const { persistAtom } = recoilPersist();

const videoListState = atom<List[]>({
  key: "videoListState",
  default: [],
});

const favoriteListState = atom<List[]>({
  key: "favoriteListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export { videoListState, favoriteListState };
