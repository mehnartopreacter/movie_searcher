export const joinListOfNamedEntities = (strings) => {
  return strings?.map((item) => item.name).join(", ");
};
