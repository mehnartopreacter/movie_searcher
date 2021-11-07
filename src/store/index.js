import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { discoverMoviesApi } from "./services/discover";
import { searchMoviesApi } from "./services/search";
import { moviesInfoApi } from "./services/movies";

export const store = configureStore({
  reducer: {
    [discoverMoviesApi.reducerPath]: discoverMoviesApi.reducer,
    [searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
    [moviesInfoApi.reducerPath]: moviesInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(discoverMoviesApi.middleware)
      .concat(searchMoviesApi.middleware)
      .concat(moviesInfoApi.middleware),
});

setupListeners(store.dispatch);
