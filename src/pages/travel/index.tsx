import { NextPage } from "next";
import React from "react";
import { useWindowSize } from "../../components/hooks";
import {
  PopularDestinations,
  TripCarousel,
  TripPackages,
} from "../../components/page-sections/travel";
import SearchDestination from "../../components/page-sections/travel/SearchDestination";
import StartTravelBanner from "../../components/page-sections/travel/StartTravelBanner";
import popularNearYou from "../../data/travel/popularNearYou.json";
import popluarGlobally from "../../data/travel/popularGlobally.json";
import trips from "../../data/travel/trips.json";
import tripPackages from "../../data/travel/trip-packages.json";

const index: NextPage = () => {
  const { width, height } = useWindowSize();
  return (
    <section className="w-full min-h-screen">
      <div
        className="relative flex items-center justify-between"
        style={{
          marginLeft: width <= 768 ? 16 : 116,
          marginRight: width <= 768 ? 16 : 116,
          marginTop: width <= 768 ? 80 : 96,
        }}
      >
        <span className="text-3xl font-bold sm:text-4xl">Travel With Zo</span>
        <SearchDestination />
      </div>
      {/* <div className="w-full" style={{ marginTop: 738 }}>
        <div className={`${width <= 768 && "absolute bottom-0"} w-full`}>
          <StartTravelBanner />
        </div>
      </div> */}
      <div
        style={{
          marginLeft: width <= 768 ? 16 : 116,
          marginRight: width <= 768 ? 16 : 116,
          marginTop: width <= 768 ? 80 : 96,
          marginBottom: width <= 768 ? 80 : 96,
        }}
        className="space-y-8"
      >
        <div className="sm:h-108">
          <div className="sm:hidden">
            <TripCarousel title="Recent Community Trips" items={trips} />
          </div>
        </div>
        <div className="sm:h-32">
          <div className="absolute left-0 hidden w-screen sm:block">
            <StartTravelBanner />
          </div>
        </div>
        <PopularDestinations
          title="Popular Near You"
          destinations={popularNearYou}
        />
        <div className="sm:h-108">
          <div className="sm:hidden">
            <TripPackages
              title="Trending Trip Packages"
              packages={tripPackages}
            />
          </div>
        </div>
        <PopularDestinations
          title="Popular Globally"
          destinations={popluarGlobally}
        />
      </div>
      <StartTravelBanner className="sm:hidden" />
    </section>
  );
};

export default index;
