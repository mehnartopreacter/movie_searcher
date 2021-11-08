interface namedEntity {
  name: string;
}

export const joinListOfNamedEntities = (strings: Array<namedEntity>) => {
  return strings?.map((item) => item.name).join(", ");
};
