import axios from "axios";
import dotenv from "dotenv";
// hide important info
dotenv.config();

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line spaced-comment
    api_key: "2cec562af39ff4d7ab89e1d58532bdbb", //process.env.REACT_APP_API_KEY,
    language: "en-US",
  },
});

// assign apis in function as JS Object
export const moivesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) => api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term), // to remove space in search keywork
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) => api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term), // to remove space in search keywork
      },
    }),
};
