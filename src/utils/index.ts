export const sortByDate = (a: any, b: any) => {
  return +new Date(b.meta.date) - +new Date(a.meta.date);
};
