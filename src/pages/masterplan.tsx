import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Conclusion,
  Details,
  Builders,
  Introduction,
  Believers,
  ZoApp,
  Roadmap,
} from "../components/page-sections/masterplan";

const MasterplanPage: NextPage = () => {
  return (
    <section className="bg-white max-w-full overflow-hidden">
      <Head>
        <title>Masterplan | The Zo World</title>
      </Head>
      <Introduction />
      <Details />
      <Believers />
      <Builders />
      <Roadmap />
      <ZoApp />
      <Conclusion />
    </section>
  );
};

export default MasterplanPage;
