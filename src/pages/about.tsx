import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Mission, Team } from "../components/page-sections/about";

const About: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <title>About Zo World | The Zo World</title>
      </Head>
      <Mission />
      <Team />
    </section>
  );
};

export default About;
