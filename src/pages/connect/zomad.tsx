import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Page } from "../../components/structure";
import Loading from "../../components/ui/Loading";

const ConnectZomad: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (
      window != undefined &&
      router.query.text &&
      router.query.text.length > 0
    ) {
      setTimeout(() => {
        window.open(
          `https://api.whatsapp.com/send?phone=919289136888&text=${router.query.text}`,
          "_parent"
        );
      }, 5000);
    }
  }, [router.query]);

  return (
    <section>
      <Head>
        <meta name="title" content="Zo World | Connect Zomad" />
        <title>Zo World | Connect Zomad</title>
      </Head>
      <header className="bg-orangy absolute top-0 inset-x-0 h-18 w-full" />
      <section
        className="flex flex-col justify-center items-center w-full"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <Loading className="w-48 h-48" />
        <span className="font-semibold text-xl">Loading ...</span>
      </section>
    </section>
  );
};

export default ConnectZomad;
