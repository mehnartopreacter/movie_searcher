export const getCurrentDateString = () => {
  return new Date().toISOString().slice(0, 10);
};
