import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Hiring,
  Mission,
  Team,
  Story,
} from "../components/page-sections/about";

const About: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <title>About Zo World</title>
      </Head>
      <Mission />
      <Story />
      <Team />
      <Hiring />
    </section>
  );
};

export default About;