const baseImageUrl = "https://image.tmdb.org/t/p/w342";

export const concatImageUrl = (imagePath: string) => {
  return baseImageUrl + imagePath;
};
