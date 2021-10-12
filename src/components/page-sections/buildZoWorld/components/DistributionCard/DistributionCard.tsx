import Image from "next/image";
import React from "react";
import { Flex } from "../../../../structure";

interface DistributionCardProps {
  title: string;
  count: string;
  image: StaticImageData;
}

const DistributionCard: React.FC<DistributionCardProps> = ({
  title,
  count,
  image,
}) => {
  return (
    <Flex col items="center">
      <Image src={image} alt="" />
      <h3 className="font-semibold my-2">{title}</h3>
      <p>{count}</p>
    </Flex>
  );
};

export default DistributionCard;
