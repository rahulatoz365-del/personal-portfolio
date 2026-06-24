"use client";

import React from "react";
import { dev, dataSci } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TechStacks = () => {
  return (
    <section id="techstack" className="py-20 relative">
      <h1 className="heading mb-16 text-center">
        My Professional <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="flex flex-col items-center justify-center gap-12 relative z-10">
        
        <div className="w-full flex flex-col items-center">
          <p className="text-xs md:text-sm uppercase tracking-widest text-purple font-semibold mb-4 text-center bg-purple/10 border border-purple/20 px-4 py-1 rounded-full">
            Web & Software Development
          </p>
          <div className="w-full relative overflow-hidden">
            <InfiniteMovingCards
              items={dev}
              direction="left"
              speed="normal"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-4">
          <p className="text-xs md:text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-4 text-center bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 rounded-full">
            Data Science & Artificial Intelligence
          </p>
          <div className="w-full relative overflow-hidden">
            <InfiniteMovingCards
              items={dataSci}
              direction="right"
              speed="normal"
            />
          </div>
        </div>

      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-purple/5 blur-[120px] pointer-events-none -z-10" />
    </section>
  );
};

export default TechStacks;