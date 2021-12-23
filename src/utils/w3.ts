export const parseWeb3Error = (e: string) =>
  JSON.parse(e.substring(e.indexOf("{"), e.indexOf("}") + 1));
