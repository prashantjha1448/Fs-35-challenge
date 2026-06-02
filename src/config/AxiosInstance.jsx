import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "0f19fee237e45e7cffbe96734e7a85c0",
    language: 'en-US',
  },
});
