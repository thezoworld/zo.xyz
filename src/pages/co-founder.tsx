import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Details,
  Introduction,
} from "../components/page-sections/becomeCofounder";

const becomeCofounder: NextPage = () => {
  return (
    <section className="bg-white max-w-full overflow-hidden">
      <Head>
        <title>Become a Cofounder | The Zo World</title>
      </Head>
      <Introduction />
      <Details />
    </section>
  );
};

export default becomeCofounder;
