import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCurrentDateString } from "../../utils/getCurrentDateString";
import { TMDB_API_KEY } from "../../common/api";

export const discoverMoviesApi = createApi({
  reducerPath: "discoverMoviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/discover/",
  }),
  endpoints: (builder) => ({
    getSortedMovies: builder.query({
      query: (sortType) =>
        `movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=${sortType}&release_date.lte=${getCurrentDateString()}&page=1`,
    }),
  }),
});

export const { useGetSortedMoviesQuery } = discoverMoviesApi;
