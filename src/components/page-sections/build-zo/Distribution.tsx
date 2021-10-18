import React from "react";
import Image from "next/image";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import { DistributionData } from "./data/Distriution";

interface DisctributionProps {}

const Distribution: React.FC<DisctributionProps> = () => {
  return (
    <Container style={{ backgroundColor: "#B3E1E7" }} className="py-16">
      <h2 className="font-semibold text-2xl mb-6 text-center">Distribution</h2>
      <Flex col items="center" className="max-w-3xl w-full mx-auto px-4">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="text-left w-3/4 py-2 pl-14 md:pl-18">Category</th>
              <th className="text-right w-1/4"># of Founder Cards</th>
            </tr>
          </thead>
          <tbody>
            {DistributionData.map((d) => (
              <tr key={d.category}>
                <td className="w-3/4 py-2">
                  <Flex items="start">
                    <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full mr-2 md:mr-6">
                      <Image width={48} height={48} src={d.image} alt="" />
                    </div>
                    <span className="pt-3">{d.category}</span>
                  </Flex>
                </td>
                <td className="text-right w-1/4 align-top pt-1">{d.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
    </Container>
  );
};

export default Distribution;
