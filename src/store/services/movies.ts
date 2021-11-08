import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMDB_API_KEY } from "../../common/api";

export const moviesInfoApi = createApi({
  reducerPath: "moviesInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie/",
  }),
  endpoints: (builder) => ({
    getMovieInfo: builder.query({
      query: (movieId: number) =>
        `${movieId}?api_key=${TMDB_API_KEY}&language=en-US`,
    }),
  }),
});

export const { useGetMovieInfoQuery } = moviesInfoApi;
