import React from "react";
import { generateHeadDataFromObject } from "../../../utils";

interface PageProps {
  headData: HeadObject;
}

const Page: React.FC<PageProps> = ({ children, headData }) => {
  const headComponent = generateHeadDataFromObject(headData);

  return (
    <section className="bg-white max-w-full overflow-hidden">
      {headComponent}
      {children}
    </section>
  );
};

export default Page;
