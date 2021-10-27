export const sortByDate = (a: any, b: any) => {
  return +new Date(b.meta.date) - +new Date(a.meta.date);
};

export const sortByAlias = (a: any, b: any) => {
  if (a.alias.toLowerCase() < b.alias.toLowerCase()) {
    return -1;
  }
  if (a.alias.toLowerCase() > b.alias.toLowerCase()) {
    return 1;
  }
  return 0;
};
