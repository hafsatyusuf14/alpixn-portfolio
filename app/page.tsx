import React from "react";
import { Hero } from "@/src/components/hero";

import { OurWork } from "@/src/components/ourWork";
import { Consultation } from "@/src/components/consultation";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurWork />
      <Consultation />
    </div>
  );
};

export default Home;
