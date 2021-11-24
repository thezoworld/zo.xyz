import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Metadata {
  name: string;
  description: string;
  image: string;
  attributes: [{ trait_type: string; value: string }];
}

interface AlphaNFTProps {
  tokenId: number;
  walletAddress: string;
}

const URI = (tokenId: number) =>
  `https://nft-cdn.zo.xyz/artefacts/${tokenId}.json`;

const AlphaNFT: React.FC<AlphaNFTProps> = ({ tokenId, walletAddress }) => {
  const [metadata, setMetadata] = useState<Metadata>();

  useEffect(() => {
    (async () => {
      try {
        const _url = URI(tokenId);
        const _metadata = (await axios.get(_url)).data;
        setMetadata(_metadata);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [tokenId]);

  return (
    <section className="flex flex-col w-full h-full p-8 space-y-8 xl:flex-row xl:space-x-8 xl:space-y-0">
      {metadata ? (
        <>
          <div className="flex items-start justify-center xl:max-w-xl">
            <img
              src={metadata.image}
              alt={metadata.name}
              className="object-fill rounded-lg shadow-xl"
            />
          </div>
          <section className="w-full space-y-8">
            <div className="w-full h-auto px-4 py-8 space-y-4 bg-gray-600 rounded-lg shadow-xl">
              <span className="block text-xl font-bold">{metadata.name}</span>
              <span className="block">{metadata.description}</span>
              <span className="flex items-baseline">
                <span className="mr-4 text-sm uppercase">Owner</span>
                <span className="overflow-hidden font-bold overflow-ellipsis">
                  {walletAddress}
                </span>
              </span>
            </div>
            <div className="w-full h-auto px-4 py-8 space-y-4 bg-gray-600 rounded-lg shadow-xl">
              <span className="text-xl font-bold">Traits</span>
              <div className="flex flex-wrap items-center">
                {metadata.attributes.map((a) => (
                  <div key={a.trait_type} className="p-4 m-2 border rounded-lg">
                    <span className="block text-xs uppercase">
                      {a.trait_type}
                    </span>
                    <span className="block font-bold">{a.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <section></section>
      )}
    </section>
  );
};

export default AlphaNFT;
