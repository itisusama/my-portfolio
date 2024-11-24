"use client"

// import { delay, motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend Ecommerce",
    title: "Iphone Arena",
    description: "This is a mobiles and accessories e-commerce built in pure Html/Css",
    stack: [{name:"HTML 5"}, {name:"CSS 3"}, {name:"JavaScript"}],
    image: "/assets/work/iphonearena.png",
    link: "https://itisusama.github.io/iphonearena/",
  },
  // {
  //   num: "02",
  //   category: "Frontend Service",
  //   title: "Pro Tyre Fitters",
  //   description: "This is a tyre Service Site built and deployed in react js",
  //   stack: [{name:"React.js"}, {name:"Bootstrap"}, {name:"CSS 3"}],
  //   image: "/assets/work/protyrefitters.png",
  //   link: "https://protyrefitters.co.uk/",
  // },
  {
    num: "02",
    category: "Frontend Service",
    title: "Prime Chauffeur",
    description: "This is a chauffeuring website built in pure Html/Css, in Laravel and deployed and also built in react js",
    stack: [{name:"React.js"}, {name:"CSS 3"}, {name:"HTML 5"}, {name:"JavaScript"}, {name:"Laravel"}],
    image: "/assets/work/primechauffeur.png",
    link: "https://primechauffeurreact.vercel.app/",
  },
  {
    num: "03",
    category: "Frontend Service",
    title: "iChauffeur",
    description: "This is a chauffeuring website built in pure Html/Css, in Laravel and deployed and also built in react js",
    stack: [{name:"HTML 5"}, {name:"CSS 3"}, {name:"JavaScript"}],
    image: "/assets/work/ichauffeur.png",
    link: "https://itisusama.github.io/ichauffeur/",
  },
  {
    num: "04",
    category: "Frontend Ecommerce",
    title: "Wood Mart",
    description: "This is a furniture site website built and deployed in react",
    stack: [{name:"HTML 5"}, {name:"CSS 3"}, {name:"React.js"}],
    image: "/assets/work/woodmart.png",
    link: "https://woodmart-sand.vercel.app/",
  },
  {
    num: "05",
    category: "Full Stack",
    title: "Usama Hassan Portfolio",
    description: "This is my personal portfolio build with frontend with REST API",
    stack: [{name:"REST API"}, {name:"NEXT.js"}, {name:"Node.js"}, {name:"Tailwind CSS"}, {name:"ShadCN"}],
    image: "/assets/work/portfolio.png",
    link: "https://www.usamahassanasi.com",
  },

  {
    num: "06",
    category: "MERN Stack",
    title: "Workout Buddy",
    description: "This is a workout CRUD app with REST API",
    stack: [{name:"REST API"}, {name:"React.js"}, {name:"Node.js"}, {name:"Tailwind CSS"}],
    image: "/assets/work/workout-buddy.png",
    link: "https://mern-app-pi-sandy.vercel.app/",
  },

  {
    num: "07",
    category: "Full Stack",
    title: "Writers Editor",
    description: "This is a writers editor CRUD app with Local API",
    stack: [{name:"LOCAL API"}, {name:"NEXT.js"}, {name:"Node.js"}, {name:"Tailwind CSS"}],
    image: "/assets/work/editor.png",
    link: "https://my-story-sandy.vercel.app/",
  },
]

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setSelectedProject(projects[currentIndex])
  }
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="flex justify-center items-center">
    <p className="text-center mb-4 w-[90%] lg:w-[80%]">All the Websites and Web Apps Shown here are those on which I worked on and are legal for me to show. I have worked on live domain websites but I am not authorized to show them here as they are personal properties of the companies that I worked with.</p>
    </div>
    
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {selectedProject.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">{selectedProject.title}</h2>
              <h2 className="font-bold leading-none text-white/80 group-hover:text-accent transition-all duration-500 capitalize">{selectedProject.category} project</h2>
              <p className="text-white/60">{selectedProject.description}</p>
              <ul className="flex gap-4">
                {
                  selectedProject.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== selectedProject.stack.length - 1 && "."}
                    </li>
                  ))
                }
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 mt-2">
                <Link href={selectedProject.link}>
                 <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                 </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                 return <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="" alt="project"/>
                    </div>
                  </div>
                 </SwiperSlide>
              })
              }
              <WorkSliderBtns btnStyle="xl:bg-accent xl:text-white text-[44px] p-1 w-[22px] h-[22px] xl:rounded-full flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work