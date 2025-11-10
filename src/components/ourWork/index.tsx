import React from "react";
import { Card } from "../card";
import { works } from "@/data/works";

export const OurWork = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6 mx-[50px]">
      {/* First row: first 3 cards */}
      {works.slice(0, 3).map((work) => (
        <Card
          key={work.id}
          image={work.image}
          title={work.title}
          subtitle={work.subtitle}
        />
      ))}

      {/* Second row: one card spans 2 columns on desktop only */}
      <Card
        key={works[3].id}
        image={works[3].image}
        title={works[3].title}
        subtitle={works[3].subtitle}
        className="lg:col-span-2" // spans 2 columns on desktop (lg) only
      />
      <Card
        key={works[4].id}
        image={works[4].image}
        title={works[4].title}
        subtitle={works[4].subtitle}
      />

      {/* Third row: next 3 cards */}
      {works.slice(5, 8).map((work) => (
        <Card
          key={work.id}
          image={work.image}
          title={work.title}
          subtitle={work.subtitle}
        />
      ))}
    </div>
  );
};
