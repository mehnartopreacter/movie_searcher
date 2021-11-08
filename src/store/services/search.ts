import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMDB_API_KEY } from "../../common/api";

export const searchMoviesApi = createApi({
  reducerPath: "searchMoviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/search/",
  }),
  endpoints: (builder) => ({
    getFoundMovies: builder.query({
      query: (searchInput: string) =>
        `movie?api_key=${TMDB_API_KEY}&language=en-US&query=${searchInput}&page=1&include_adult=false`,
    }),
  }),
});

export const { useGetFoundMoviesQuery } = searchMoviesApi;
