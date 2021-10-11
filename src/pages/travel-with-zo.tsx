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
      <header className="bg-orangy h-20 w-full" />
      <Widget
        id="fctEvmR6"
        className="w-full"
        style={{ height: "calc(100vh - 5rem)" }}
      />
    </section>
  );
};

export default TravelWithZoClub;
