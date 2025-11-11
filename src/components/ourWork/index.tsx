"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card } from "../card";
import { works } from "@/data/works";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import computer1 from "../../../public/images/works/computer-1.webp";
import computer2 from "../../../public/images/works/computer-2.webp";
import computer3 from "../../../public/images/works/computer-3.webp";
import computer4 from "../../../public/images/works/computer-4.webp";
import Amith from "../../../public/images/team/amith.webp";
import karan from "../../../public/images/team/karan.webp";
import anna from "../../../public/images/team/anna.webp";
import sneh from "../../../public/images/team/sneh.webp";

export const OurWork = () => {
  const [selectedWork, setSelectedWork] = useState<
    (typeof works)[number] | null
  >(null);
  const ourWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedWork && ourWorkRef.current) {
      ourWorkRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedWork]);

  return (
    <AnimatePresence mode="wait">
      {!selectedWork ? (
        // Section 1: Grid
        <motion.section
          key="grid"
          className="py-6 px-[50px] mb-10 bg-[#00152B] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold">
              Showcasing Our Work
            </h2>

            {/* Right Search + Emoji */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              {/* Search Input */}
              <div className="flex items-center border-[0.7px] border-[#389EFF] rounded-[10px] px-4 py-2 w-full lg:w-[280px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none flex-1 text-white font-normal lg:text-[16px]"
                />
              </div>

              {/* Emoji Box */}
              <div className="border border-[#389EFF] rounded-[10px] px-3 py-2 text-xl">
                🔍
              </div>
            </div>
          </div>

          {/* Grid of Works */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.slice(0, 3).map((work) => (
              <motion.div
                key={work.id}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <Card
                  image={work.image}
                  title={work.title}
                  subtitle={work.subtitle}
                />
              </motion.div>
            ))}

            <motion.div
              key={works[3].id}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer lg:col-span-2"
              onClick={() => setSelectedWork(works[3])}
            >
              <Card
                image={works[3].image}
                title={works[3].title}
                subtitle={works[3].subtitle}
              />
            </motion.div>

            <motion.div
              key={works[4].id}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
              onClick={() => setSelectedWork(works[4])}
            >
              <Card
                image={works[4].image}
                title={works[4].title}
                subtitle={works[4].subtitle}
              />
            </motion.div>

            {works.slice(5, 8).map((work) => (
              <motion.div
                key={work.id}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <Card
                  image={work.image}
                  title={work.title}
                  subtitle={work.subtitle}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      ) : (
        // Section 2: Detail View
        <motion.section
          key="detail"
          className="py-6 px-[50px] text-white bg-[#00152B] rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          ref={ourWorkRef}
        >
          <button
            onClick={() => setSelectedWork(null)}
            className="mb-4 inline-flex items-center gap-2 bg-[#389EFF] hover:bg-[#2c7acc] text-white px-4 py-2 rounded transition-colors"
          >
            ← Back to Works
          </button>

          <div className="flex flex-col gap-10">
            {/* Left Image + Right Details */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full lg:w-2/5 h-[250px] sm:h-[400px] lg:h-[555px] rounded-3xl overflow-hidden">
                <Image
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="w-full lg:w-3/5 flex flex-col gap-4">
                <span className="inline-block text-[13px] border border-[#389EFF] rounded-full px-6 py-2 mb-2 w-max">
                  January 2024
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold">
                  Details
                </h2>
                <p className="text-sm sm:text-base lg:text-[20px] font-normal">
                  Transforming Sales for Trendy Apparel Co. Client Overview:
                  Trendy Apparel Co., a budding online fashion retailer,
                  specializes in the latest trends targeting young adults.
                  Despite a strong product lineup, they struggled to convert
                  website visitors into buyers.
                </p>

                <ul className="list-disc list-outside pl-5 space-y-2 text-lg lg:text-[20px]">
                  <li>Low conversion rates with a high bounce rate.</li>
                  <li>Minimal online presence compared to competitors.</li>
                  <li>Ineffective engagement on social media platforms.</li>
                  <li>Enhance brand visibility on social media.</li>
                  <li>Scheduled posts and engaging stories.</li>
                </ul>
              </div>
            </div>

            {/* Objectives + Sticky Right Image */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-3/5 flex flex-col gap-4">
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold">
                  Objectives
                </h2>
                <p className="text-sm sm:text-base lg:text-[20px] font-normal lg:my-6">
                  The primary focus was to boost Trendy Apparel Co.’s digital
                  performance and online visibility. The goal was to attract
                  more qualified visitors, improve conversion efficiency, and
                  establish a stronger social presence to drive brand loyalty
                  and sales growth.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-lg lg:text-[20px]">
                  <li>
                    Drive a 50% increase in website traffic within 6 months.
                  </li>
                  <li>Boost online sales conversion rate by 30%.</li>
                  <li>
                    Enhance brand visibility across social media platforms.
                  </li>
                  <li>Strengthen customer engagement consistently.</li>
                </ul>
              </div>
              <div className="w-full lg:w-2/5 bg-linear-to-b from-[#002348] via-[#00141F] to-[#002348] border border-[#2a3f57] rounded-[10px] px-6 py-7 text-white shadow-[0_0_20px_rgba(56,158,255,0.25)] lg:sticky lg:top-20">
                <h3 className="text-xl font-semibold mb-3">
                  About The Project
                </h3>

                {/* Divider line */}
                <div className="h-px bg-[#2a3f57] mb-4"></div>

                {/* Industry */}
                <p className="text-base mb-4">
                  <span className="font-semibold lg:text-[16px]">
                    Industry:
                  </span>
                  <br />
                  <span className="lg:text-16px] font-normal">
                    {" "}
                    Fashion &amp; E-Commerce
                  </span>
                </p>

                {/* Services Provided */}
                <p className="font-semibold lg:text-[16px] mb-2">
                  Services Provided:
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    "UI/UX Design",
                    "Social Media Strategy",
                    "Website Redesign",
                    "Conversion Optimization",
                  ].map((service, i) => (
                    <div
                      key={i}
                      className="border border-[#2a3f57] rounded-lg p-3 text-sm lg:text-[16px]"
                    >
                      {service}
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <p className="font-semibold lg:text-[16px] mb-2">
                  Technologies Used:
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Meta Business Suite",
                    "Google Analytics",
                    "Figma",
                    "Webflow",
                    "Adobe Illustrator",
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="border border-[#2a3f57] rounded-lg p-3 lg:text-[16px] text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Problems */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-3/5">
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-6">
                  Problems
                </h2>
                <ol className="list-decimal list-outside pl-6 space-y-4 text-sm sm:text-base lg:text-[24px]">
                  <li>
                    <strong>Low Conversion & High Bounce Rate:</strong>
                    <p className="mt-1 lg:text-[20px]">
                      Difficulty turning visitors into paying customers due to
                      poor navigation, unclear CTAs, and slow load times.
                    </p>
                  </li>
                  <li>
                    <strong>Weak Online Presence:</strong>
                    <p className="mt-1 lg:text-[20px]">
                      Limited visibility on search engines and inconsistent
                      content updates made it hard for customers to find
                      products.
                    </p>
                  </li>
                  <li>
                    <strong>Poor Social Media Engagement:</strong>
                    <p className="mt-1 lg:text-[20px]">
                      Irregular posting, lack of visually appealing content, and
                      absence of strategy led to low interaction and minimal
                      brand awareness.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="w-full lg:w-2/5"></div>
            </div>

            {/* Solutions */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-3/5">
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-6">
                  Solutions
                </h2>
                <ol className="list-decimal list-outside pl-6 space-y-4 text-sm sm:text-base lg:text-[24px]">
                  <li>
                    <strong>SEO Optimization:</strong>
                    <p className="mt-1 lg:text-[20px]">
                      Revamped website content and structure, performed SEO
                      audit, optimized metadata and product descriptions,
                      implemented internal linking.
                    </p>
                  </li>
                  <li>
                    <strong>Content Marketing:</strong>
                    <p className="mt-1 lg:text-[20px]">
                      Launched fashion blog with SEO optimized content, promoted
                      via newsletters to drive repeat traffic.
                    </p>
                  </li>
                  <li>
                    <strong>Social Media Campaigns:</strong>
                    <p className="mt-1 lg:text-[20px]">
                      Created visually compelling ads, scheduled posts and
                      stories, partnered with influencers to broaden reach.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="w-full lg:w-2/5"></div>
            </div>

            {/* New Custom Image Section under Solutions */}
            <section className="my-10 flex flex-col gap-6">
              {/* First Row */}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="relative w-full lg:w-[71.43%] h-[300px] lg:h-[500px] rounded-3xl overflow-hidden">
                  <Image
                    src={computer1}
                    alt="Left Image 1"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
                <div className="relative w-full lg:w-[28.57%] h-[300px] lg:h-[500px] rounded-3xl overflow-hidden">
                  <Image
                    src={computer2}
                    alt="Right Image 1"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="relative w-full lg:w-[28.57%] h-[300px] lg:h-[500px] rounded-3xl overflow-hidden">
                  <Image
                    src={computer3}
                    alt="Left Image 2"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
                <div className="relative w-full lg:w-[71.43%] h-[300px] lg:h-[500px] rounded-3xl overflow-hidden">
                  <Image
                    src={computer4}
                    alt="Right Image 2"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </section>
            {/* ------------------- Results Section ------------------- */}
            <section className="flex flex-col lg:flex-row justify-between gap-6 mt-16">
              {/* Left Side */}
              <div className="w-full lg:w-3/5">
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4">
                  Results
                </h2>
              </div>

              {/* Right Side */}
              <div className="w-full lg:w-2/5 flex flex-col justify-start">
                {/* Top Numbers with Labels */}
                <div className="flex justify-between lg:gap-2 text-center mb-6">
                  {/* Left Metric */}
                  <div>
                    <p className="text-[#389EFF] font-semibold text-[40px] sm:text-[50px] lg:text-[40px] leading-none">
                      71.4%
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-[20px] mt-1">
                      Conversion Increase
                    </p>
                  </div>

                  {/* Right Metric */}
                  <div>
                    <p className="text-[#389EFF] font-semibold text-[40px] sm:text-[50px] lg:text-[40px] leading-none">
                      342.4%
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-[20px] mt-1">
                      Revenue Increase
                    </p>
                  </div>
                </div>

                {/* Bulleted Results */}
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 text-sm sm:text-base lg:text-[20px] font-normal">
                  <li>
                    Within five months, website traffic surged by 60%, with a
                    significant drop in bounce rates.
                  </li>
                  <li>
                    Conversion rates improved by 35%, reflecting increased sales
                    and customer retention.
                  </li>
                  <li>
                    Social media profiles grew by 25% in followers, with higher
                    engagement rates, especially in post-interaction and story
                    views.
                  </li>
                </ul>
              </div>
            </section>
            {/* ------------------- Meet Our Team Section ------------------- */}
            <section className="my-20 text-center">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-10">
                Meet Our Team
              </h2>

              {/* Team Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[219px] h-[219px] rounded-full overflow-hidden mb-4">
                    <Image
                      src={Amith}
                      alt="Team Member 1"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium lg:text-[26px]">
                    Amith Jay
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-[20px] mb-2">
                    UI/UX Designer (Lead)
                  </p>
                  <div className="text-xl flex gap-2">
                    <Image
                      src="/icons/insta.svg"
                      alt="instagram"
                      height={30}
                      width={30}
                    />
                    <Image
                      src="/icons/link.svg"
                      alt="instagram"
                      height={30}
                      width={30}
                    />
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[219px] h-[219px] rounded-full overflow-hidden mb-4">
                    <Image
                      src={karan}
                      alt="Team Member 2"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium lg:text-[26px]">
                    Karan Sharma
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-[20px] mb-2">
                    Digital Marketing Analyst
                  </p>
                  <div className="text-xl flex gap-2">
                    <Image
                      src="/icons/instagram.svg"
                      alt="instagram"
                      height={30}
                      width={30}
                    />
                    <Image
                      src="/icons/linkedin.svg"
                      alt="instagram"
                      height={30}
                      width={30}
                    />
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[219px] h-[219px] rounded-full overflow-hidden mb-4">
                    <Image
                      src={anna}
                      alt="Team Member 3"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium lg:text-[26px]">
                    Anna Bhattacharya
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-[20px] mb-2">
                    Content Strategist
                  </p>
                  <div className="text-xl flex gap-2">
                    <Image
                      src="/icons/instagram.svg"
                      alt="instagram"
                      height={30}
                      width={30}
                    />
                    <Image
                      src="/icons/linkedin.svg"
                      alt="instagram"
                      height={30}
                      width={30}
                    />
                  </div>
                </div>

                {/* Team Member 4 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[219px] h-[219px] rounded-full overflow-hidden mb-4">
                    <Image
                      src={sneh}
                      alt="Team Member 4"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium lg:text-[26px]">
                    Snehashri S
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-[20px] mb-2">
                    Social Media Manager{" "}
                  </p>
                  <div className="text-xl flex gap-2">
                    <Image
                      src="/icons/instagram.svg"
                      alt="instagram"
                      height={30}
                      width={30}
                    />
                    <Image
                      src="/icons/linkedin.svg"
                      alt="instagram"
                      height={30}
                      width={30}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="my-20 ">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-10 text-center">
                View More Projects
              </h2>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {works.slice(0, 3).map((work) => (
                  <Card
                    key={work.id}
                    image={work.image}
                    title={work.title}
                    subtitle={work.subtitle}
                  />
                ))}
              </div>
            </section>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
