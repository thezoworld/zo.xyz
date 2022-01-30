import axios from "axios";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import { useMetaMask, useWeb3 } from "../../components/hooks";
import { Wallet } from "../../components/page-sections/mint";
import { Page } from "../../components/structure";
import { Button } from "../../components/ui";

const SIGNING_BASE_URL = "https://api.staging.zostel.com/api/v1/artefacts";

const grant: NextPage = () => {
  const wallet = useMetaMask();
  const web3 = useWeb3();
  const [signatureVerified, setSignatureVerified] = useState(false);
  const [tweetText, setTweetText] = useState("");

  const sign = useCallback(async () => {
    if (web3) {
      const _signingKey: { key: string } = (
        await axios.get(
          `${SIGNING_BASE_URL}/get_signing_key/${wallet.address}/`
        )
      ).data;

      const _key = _signingKey.key;
      const _sign = await web3.eth.personal.sign(_key, wallet.address, "");

      const verifiedData: { verified: boolean; tweet_text: string } = (
        await axios.get(`${SIGNING_BASE_URL}/verify_signed_data/`, {
          params: { key: _key, sign: _sign },
        })
      ).data;

      setSignatureVerified(verifiedData.verified);
      setTweetText(verifiedData.tweet_text);
    }
  }, [web3, wallet.address]);

  const tweet = () => {
    if (signatureVerified) {
      window.open(`https://twitter.com/intent/tweet?text=${tweetText}`);
    }
  };

  return (
    <Page headData={{ title: "Zo World | Grant | MATIC", meta: {} }}>
      <section className="flex justify-center min-h-screen bg-blue-300">
        <section className="flex flex-col w-full text-white">
          <span className="w-full my-24 text-3xl font-bold text-center">
            Zo World Grant
          </span>
          <section className="mx-auto space-y-8">
            <div className="">
              <Wallet
                {...wallet}
                className="bg-blue-400 rounded-lg shadow-lg"
              />
            </div>
            {wallet.isConnected && (
              <>
                {!signatureVerified ? (
                  <div className="space-y-8">
                    <span className="font-semibold">
                      To participate in Zo World's Grant, sign below and follow
                      the instructions to tweet at us and get your free NFT and
                      MATIC in your wallet.
                    </span>
                    <div className="flex items-center justify-center">
                      <Button onClick={sign}>Sign Up For Grant.</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <span className="font-semibold">
                      To recieve your free airdrop, tweet at us by clicking the
                      button below.
                    </span>
                    <div className="flex items-center justify-center">
                      <Button onClick={tweet}>Tweet At Us</Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </section>
        </section>
      </section>
    </Page>
  );
};

export default grant;
