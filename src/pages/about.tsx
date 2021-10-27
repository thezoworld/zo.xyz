import { NextPage } from "next";
import React from "react";
import { FoundersList, Introduction } from "../components/page-sections/about";
import { Page } from "../components/structure";
import headData from "./../data/head/about.json";

const About: NextPage = () => {
  return (
    <Page headData={headData}>
      <Introduction />
      <FoundersList />
    </Page>
  );
};

export default About;
