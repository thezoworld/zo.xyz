import React from "react";
import ZomadCreator from "./../../components/page-sections/ZomadCreator";

interface createProps {}

const create: React.FC<createProps> = () => {
  return (
    <section>
      <header className="bg-orangy absolute top-0 left-0 right-0 h-18 w-full" />
      <ZomadCreator />
    </section>
  );
};

export default create;
