import Head from "next/head";
import React, { ReactElement } from "react";
import { isValidObject } from "./object";
import { isValidString } from "./string";

export const generateHeadDataFromObject = (headData: HeadObject) => {
  const components: ReactElement[] = [];
  const { title, meta } = headData;
  if (isValidString(title)) {
    components.push(<title>{title}</title>);
  }
  if (isValidObject(meta)) {
    for (const key in meta) {
      if (Object.prototype.hasOwnProperty.call(meta, key)) {
        const value = meta[key];
        if (isValidString(value)) {
          components.push(<meta key={key} content={value} />);
        }
      }
    }
  }

  return <Head>{components}</Head>;
};
