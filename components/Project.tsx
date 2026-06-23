"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple italic text-normal line-through">Recent Projects</span>
      </h1>
      
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <CardContainer className="inter-var" key={item.id}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/10 border-black/10 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-between">
              <div className="relative flex items-center justify-center sm:w-[27rem] w-[80vw] max-w-full h-[20vh] lg:h-[30vh] mb-6 rounded-xl [transform-style:preserve-3d]">
                <CardItem
                  translateZ="100"
                  rotateX={10}
                  rotateZ={-4}
                  className="w-full h-full"
                >
                  <img
                    src={item.img}
                    alt="cover"
                    className="w-full h-full object-cover rounded-xl shadow-2xl group-hover/card:scale-105 transition-transform duration-200"
                  />
                </CardItem>
              </div>

              <CardItem
                translateZ="50"
                className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-neutral-600 dark:text-white mt-4"
              >
                {item.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] mt-2"
              >
                {item.des}
              </CardItem>

              <div className="flex items-center justify-between mt-7 mb-3 [transform-style:preserve-3d]">
                <CardItem translateZ="40" className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </CardItem>

                <CardItem
                  translateZ="40"
                  as="a"
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center cursor-pointer group/link"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple group-hover/link:underline">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" color="#CBACF9" />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;