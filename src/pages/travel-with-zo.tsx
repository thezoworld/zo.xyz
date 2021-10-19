import { Widget } from "@typeform/embed-react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const TravelWithZoClub: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <title>Travel with Zo Club | The Zo World</title>
      </Head>
      <header className="bg-orangy absolute top-0 inset-x-0 h-18 w-full" />
      <Widget id="fctEvmR6" className="w-full h-screen pt-18" />
    </section>
  );
};

export default TravelWithZoClub;
