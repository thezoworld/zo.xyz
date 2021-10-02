import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Details,
  Introduction,
} from "../components/page-sections/becomeCofounder";

const becomeCofounder: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <title>Become a Cofounder</title>
      </Head>
      <Introduction />
      <Details />
    </section>
  );
};

export default becomeCofounder;
