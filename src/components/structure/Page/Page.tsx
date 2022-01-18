import React from "react";
import { generateHeadDataFromObject } from "../../../utils/generator";

interface PageProps {
  headData?: HeadObject;
  className?: string;
}

const Page: React.FC<PageProps> = ({
  children,
  headData,
  className = "bg-white max-w-full overflow-hidden",
}) => {
  const headComponent = headData ? generateHeadDataFromObject(headData) : null;

  return (
    <section className={className}>
      {headComponent}
      {children}
    </section>
  );
};

export default Page;
