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
          className="my-6 mx-[50px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
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
          className="my-6 mx-[50px] text-white bg-[#0b0b0b] rounded-lg"
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
                <p className="text-sm sm:text-base lg:text-[20px] font-normal">
                  Boost Trendy Apparel Co.’s digital performance and online
                  visibility. Attract qualified visitors, improve conversion,
                  and establish a stronger social presence.
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
              <div className="relative w-full lg:w-2/5 h-[250px] sm:h-[400px] lg:h-[555px] rounded-3xl overflow-hidden lg:sticky lg:top-20">
                <Image
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Problems */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-3/5">
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-2">
                  Problems
                </h2>
                <ol className="list-decimal list-inside space-y-4 text-sm sm:text-base lg:text-[20px]">
                  <li>
                    <strong>Low Conversion & High Bounce Rate:</strong>
                    <p className="mt-1">
                      Difficulty turning visitors into paying customers due to
                      poor navigation, unclear CTAs, and slow load times.
                    </p>
                  </li>
                  <li>
                    <strong>Weak Online Presence:</strong>
                    <p className="mt-1">
                      Limited visibility on search engines and inconsistent
                      content updates made it hard for customers to find
                      products.
                    </p>
                  </li>
                  <li>
                    <strong>Poor Social Media Engagement:</strong>
                    <p className="mt-1">
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
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-2">
                  Solutions
                </h2>
                <ol className="list-decimal list-inside space-y-4 text-sm sm:text-base lg:text-[20px]">
                  <li>
                    <strong>SEO Optimization:</strong>
                    <p className="mt-1">
                      Revamped website content and structure, performed SEO
                      audit, optimized metadata and product descriptions,
                      implemented internal linking.
                    </p>
                  </li>
                  <li>
                    <strong>Content Marketing:</strong>
                    <p className="mt-1">
                      Launched fashion blog with SEO optimized content, promoted
                      via newsletters to drive repeat traffic.
                    </p>
                  </li>
                  <li>
                    <strong>Social Media Campaigns:</strong>
                    <p className="mt-1">
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
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
