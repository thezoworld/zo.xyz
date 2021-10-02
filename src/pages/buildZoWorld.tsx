import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Details,
  Introduction,
} from "../components/page-sections/buildZoWorld";

const buildZoWorld: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <title>Build Zo World</title>
      </Head>
      <Introduction />
      <Details />
    </section>
  );
};

export default buildZoWorld;
