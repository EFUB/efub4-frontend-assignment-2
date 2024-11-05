import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {key: process.env.REACT_APP_API_KEY },
});

export const getSearch = async (keyword: string) => {
  try {
    const res = await axiosInstance.get("search", {
      params: {
        part: "snippet",
        q: keyword,
        regionCode: "KR",
        relevanceLanguage: "ko",
        order: "viewCount",
        type: "video",
        maxResults: 10,
        videoEmbeddable: true,
      },
    });
    return res.data.items;
  } catch (e) {
    throw e;
  }
};
