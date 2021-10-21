import Image from "next/image";
import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import { DistributionData } from "./data/Distriution";

interface DisctributionProps {}

const Distribution: React.FC<DisctributionProps> = () => {
  return (
    <Container style={{ backgroundColor: "#B3E1E7" }} className="py-16">
      <h2 className="font-semibold text-2xl mb-6 text-center">Distribution</h2>
      <Flex col items="center" className="max-w-3xl w-full mx-auto px-4">
        <section className="flex flex-col w-full">
          <section className="flex md:flex-col justify-between md:grid grid-cols-6 font-bold w-full text-gray-800 uppercase tracking-wide pb-4">
            <div className="col-span-4 md:ml-20">Category</div>
            <div className="col-span-2"># Founder NFTs</div>
          </section>
          <section className="flex md:flex-col justify-between md:grid grid-cols-6 border-b text-xl font-semibold border-black w-full py-4">
            <div className="col-span-4 md:pl-20">Builders</div>
            <div className="col-span-2 px-2">5,556</div>
          </section>
          {DistributionData.map((d) => (
            <section
              className="flex md:flex-col justify-between md:grid grid-cols-6 w-full"
              key={d.category}
            >
              <Flex items="start" className="col-span-4 p-2">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-100 hidden md:block rounded-full mr-2 md:mr-6">
                  <Image width={48} height={48} src={d.image} alt="" />
                </div>
                <span className="pt-3">{d.category}</span>
              </Flex>
              <div className="col-span-2 px-2 pt-5">{d.count}</div>
            </section>
          ))}
          <section className="flex md:flex-col mt-2 justify-between md:grid grid-cols-6 border-t text-xl font-semibold border-black w-full py-4">
            <div className="col-span-4 md:pl-20">Believers</div>
            <div className="col-span-2 px-2">5,555</div>
          </section>
          <section className="flex md:flex-col justify-between md:grid grid-cols-6 border-t text-xl font-semibold border-black w-full py-4">
            <div className="col-span-4 md:pl-20">Total</div>
            <div className="col-span-2 px-2">11,111</div>
          </section>
        </section>
      </Flex>
    </Container>
  );
};

export default Distribution;
