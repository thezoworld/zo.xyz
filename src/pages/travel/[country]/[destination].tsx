import React from "react";
import { NavigationChips } from "../../../components/page-sections/travel";
import AboutDestination from "../../../components/page-sections/travel/AboutDestination";
import Breadcrumbs from "../../../components/page-sections/travel/Breadcrumbs";
import CommunityImages from "../../../components/page-sections/travel/CommunityImages";
import StartTravelBanner from "../../../components/page-sections/travel/StartTravelBanner";
import ThingsToDo from "../../../components/page-sections/travel/ThingsToDo";

const DestinationPage = () => {
  const navigationChips = [
    { id: 1, title: "About" },
    { id: 2, title: "Things to do" },
    { id: 3, title: "Community Photos" },
  ];

  return (
    <section className="relative w-full min-h-screen mt-8 text-sm">
      <div className="px-4 sm:px-28">
        <Breadcrumbs
          crumbs={[
            { path: "", name: "India" },
            { path: "", name: "Himanchal Pradesh" },
          ]}
          className="px-4 sm:px-0"
        />
        <span className="block px-4 my-4 text-4xl font-bold text-orangy sm:px-0">
          Manali
        </span>
        <CommunityImages />
      </div>

      <div className="hidden px-4 my-8 sm:block sm:px-28">
        <NavigationChips chips={navigationChips} />
      </div>

      <div className="px-4 sm:px-28">
        <div className="mt-4 mb-8">
          <AboutDestination />
        </div>
      </div>

      <StartTravelBanner className="hidden sm:flex" />

      <div className="px-4 mt-8 mb-12 sm:px-28">
        <ThingsToDo
          things={[
            { id: 1, name: "Nahargarh Trek" },
            { id: 2, name: "Nahargarh Trek" },
            { id: 3, name: "Nahargarh Trek" },
            { id: 4, name: "Nahargarh Trek" },
            { id: 5, name: "Nahargarh Trek" },
          ]}
        />
      </div>
      <div className="px-4 mb-8 sm:hidden">
        <NavigationChips chips={navigationChips} />
      </div>
      <StartTravelBanner className="sm:hidden" />
    </section>
  );
};

export default DestinationPage;
