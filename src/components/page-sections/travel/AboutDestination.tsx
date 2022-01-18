import React from "react";
import { DoubleArrowDown } from "../../../assets/props";
import { useWindowSize } from "../../hooks";

const AboutDestination = () => {
  const { width } = useWindowSize();
  return (
    <section className="flex flex-col w-full px-4 sm:flex-row sm:px-0">
      <div style={{ width: width <= 768 ? "100%" : 760 }}>
        <div className="max-w-lg py-4">
          <span className="block text-3xl font-bold">
            About <span className="text-orangy">Manali</span>
          </span>
          <p className="my-6">
            With its sumptuous mix of traditions, spiritual beliefs, festivals,
            architecture and landscapes, your memories of India will blaze
            bright long after you've left its shores.
          </p>
          <div className="max-w-lg">
            <span className="block text-2xl font-bold">
              India's Great Outdoors
            </span>
            <p className="my-4">
              India's landscapes are as fantastically varied as its cultural
              traditions. From the snow-dusted peaks of the Himalaya to the
              sun-splashed beaches of the tropical south, the country has a
              bounty of outdoor attractions. You can scout for big jungle cats
              on scenic wildlife safaris, paddle in the shimmering waters of
              coastal retreats, take blood-pumping treks high in the mountains,
              or simply inhale pine-scented air on meditative forest walks.
              Among all these natural treasures is a wealth of architectural
              gems, from serene temples rising out of pancake-flat plains to
              crumbling forts peering over plunging ravines.
            </p>
          </div>
          <div className="flex items-center justify-between my-8 font-bold text-black w-content">
            <span className="mr-2">Read More</span>
          </div>
        </div>
      </div>
      <div className="relative w-content">
        <img
          src="https://s3-alpha-sig.figma.com/img/8f88/bab0/65ccd3c9a64ae60ef8f634c4e9ef080e?Expires=1642982400&Signature=YwYopD-XuI-ld9IXoVDDhLaQGZllMa0vt2vVlmjK9mdj1MGRSE2F8Xt~KTzDe41C3XEU4OP69glQR5ccmy7Kqqypi3WTioxakTl9VPCp9z0kGVieGIY4Bpo4c063Ogi8SJyAQU2nx9Zighm-0sgi3KK5UYj7xBiPkSx~xMVZqY-m0P5KCwgqrHBhJYwLyA-5FyN~1aScJbKsv1UHvet02G6oXwVIfJYEZaCAKc-o~nHAfQTicL~QKqR3x9SSkBA~oXNFVUDqljHhHuefnwn1KeId~pOVEfeifbmz1mIwdI6lXdHDJJxsOfHRiJjTGCk8N04hQ1kaNVGS~MH54~Q3hA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          style={{ height: 514, width: width <= 768 ? 350 : 524 }}
          className="object-cover rounded-lg"
        />
        <div
          className="absolute px-4 bg-white rounded-lg shadow-lg left-2 bottom-2"
          style={{ height: 124, width: width <= 768 ? 196 : 185 }}
        >
          <div className="my-4">
            <span className="mr-2 font-bold text-orangy">21</span>
            <span>Local Friends</span>
          </div>
          <div className="my-4">
            <span className="mr-2 font-bold text-orangy">32</span>
            <span>Zomads Travelling</span>
          </div>
          <div className="my-4">
            <span className="mr-2 font-bold text-orangy">5</span>
            <span>Zo Hangout Spots</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDestination;
