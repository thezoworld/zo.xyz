import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Introduction } from "../components/page-sections/travelWithZoClub";

const TravelWithZoClub: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <title>Travel with Zo Club | The Zo World</title>
      </Head>
      <Introduction />
    </section>
  );
};

export default TravelWithZoClub;
