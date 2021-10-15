import distcommunity from "./../../../../../public/assets/dist-community.png";
import distcreators from "./../../../../../public/assets/dist-creators.png";
import distgiveaways from "./../../../../../public/assets/dist-giveaways.png";
import disthq from "./../../../../../public/assets/dist-hq.png";
import distinfluencer from "./../../../../../public/assets/dist-influencer.png";
import distmarketing from "./../../../../../public/assets/dist-marketing.png";
import distreserved from "./../../../../../public/assets/dist-reserved.png";

export const DistributionData: {
  image: StaticImageData;
  category: string;
  count: string;
}[] = [
  {
    image: disthq,
    category: "HQ Team",
    count: "445",
  },
  {
    image: distinfluencer,
    category: "Travel Influencers",
    count: "500",
  },
  {
    image: distmarketing,
    category: "Influencers",
    count: "500",
  },
  {
    image: distgiveaways,
    category: "Online Community, Giveaways",
    count: "500",
  },
  {
    image: distcreators,
    category:
      "Creators (Developers, Designers, Musician, Architects, Photographer)",
    count: "500",
  },
  {
    image: distcommunity,
    category:
      "Travel Community (includes Trip Host, Destination Host, Property Owner, Experience Organisers, Early Explorers etc.)",
    count: "2,000",
  },
  {
    image: distreserved,
    category: "Reserved for future use",
    count: "1,111",
  },
];
