import React from "react";
import ZomadCreator from "./../../components/page-sections/ZomadCreator";

interface createProps {}

const create: React.FC<createProps> = () => {
  return (
    <section>
      <ZomadCreator />
    </section>
  );
};

export default create;
