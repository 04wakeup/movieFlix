import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "2cec562af39ff4d7ab89e1d58532bdbb",
    language: "en-US",
  },
});

api.get("tv/top_rated");

export default api;
