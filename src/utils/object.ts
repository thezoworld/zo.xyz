export const isValidObject = (data: any) =>
  data != null && typeof data === "object" && Object.keys(data).length > 0;
