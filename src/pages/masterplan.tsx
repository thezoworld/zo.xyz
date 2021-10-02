import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Fields1Desktop } from "../assets/backgrounds";

const MasterplanPage: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <title>Masterplan | The Zo World</title>
      </Head>
      <section className="flex items-center h-72 relative overflow-hidden justify-center">
        <Fields1Desktop className="w-full absolute inset-0 h-72" />
        <h1 className="text-3xl md:text-4xl font-bold relative z-1 text-white">
          Zo World Masterplan
        </h1>
      </section>
      <article className="max-w-4xl mt-8 mx-auto px-4">
        <p className="text-lg mb-8">
          We believe all you need are a group of friends to travel anywhere in
          the world. We have this insight after hosting more than 1 million
          travellers from over 150 countries in our past work with Zostel, the
          world’s largest backpacker hostel chain.
        </p>

        <p className="text-lg mb-8">
          With web3, we are confident we can build a community-led travel
          ecosystem across the world. With the right incentives, penalties,
          risks and rewards, we see a future where anyone can travel anywhere in
          the world fearlessly.
        </p>

        <p className="text-lg mb-8">
          On 2nd October 2021, we pay ode to one of humanity’s most outstanding
          modern leaders, Mahatama Gandhi. Taking forward his vision of building
          ground-up economies empowering local communities, we open our arms for
          11,111 co-founders of the Zo World, which the world likes to call
          Zo-founders.
        </p>

        <p className="text-lg mb-8">
          As we take the first small step towards building this future, we
          acknowledge the physical space. We pay ode to 197 nation-states where
          we wish humanity gets a chance to see, touch, explore and realize the
          world as one home. We’re launching an 11,111 Zo world Genesis Country
          set, looking for the 11,111 Zo-founders.
        </p>

        <p className="text-lg mb-8">
          Five thousand five hundred fifty-five of these will be available for
          public minting after reaching 5,555 Discord members. So, please help
          us begin. Read more ‘Become a Zo-founder’
        </p>

        <p className="text-lg mb-8">
          Zo community will build the Zo World with us and earn the rest of the
          5555 cards. Read ‘Build Zo World’.
        </p>

        <p className="text-lg mb-8">
          Post the launch of our Genesis set. After that, we’ll finish our work
          with the OG Zomads avatar set. We have exciting things planned with
          animations, custom stickers, Display Pictures, Cover images, and all
          things cool to flex your Zo identity anywhere in the world.
        </p>

        <p className="text-lg mb-8">
          In parallel, we’re taking the challenge of even more prolonged and
          broader trips with the launch of complete India trips, the way we love
          it, with the locals, serendipitous and following the heart.
        </p>

        <p className="text-lg mb-8">
          Meanwhile, over the quarter, we expect to launch version 1 of our Zo
          app, enabling everyone in the world to lay the first steps towards
          becoming a destination manager, a local host for the community in
          their region.
        </p>

        <p className="text-lg mb-8">
          As we learn to work deeper with partners and service providers, we’ll
          launch a draft of our tokenomics. We’ll work with the community to
          take the best foot forward for building a future where Decentralized
          Operations, or as we like to call it, DOPE, enables individuals to
          efficiently work and contribute towards building a healthy travel and
          lifestyle ecosystem.
        </p>

        <p className="text-lg mb-8">
          We’ve also finished more than 500 quests directed towards helping us
          travel and complete challenges in real life. In addition, we’re
          building our location and AR expertise for helping all projects make
          the most of the natural world by creating experiences on the Zo
          ecosystem across the globe, starting with Zo-founders Country NFTs.
        </p>

        <p className="text-lg mb-8">
          Above all, we are having fun building our vision. Thanks to the
          possibilities enabled by current times. If you believe creating a
          future where anyone can travel anywhere fearlessly, is following your
          heart, please join us on our discord and let’s build the Zo World
          together \z/
        </p>
      </article>
    </section>
  );
};

export default MasterplanPage;
