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
    num: "02",
    category: "Full Stack",
    title: "Web Tonic",
    description: "This is a Web Development Services Website",
    stack: [{name:"HTML 5"}, {name:"CSS 3"}, {name:"JavaScript"}, {name:"React"}, {name:"Typescript"}, {name:"Mailing API"}, {name:"Tailwind"},],
    image: "/assets/work/webtonic.PNG",
    link: "https://webtonic-solutions.vercel.app/",
  },
  {
    num: "02",
    category: "Frontend Ecommerce",
    title: "Iphone Arena",
    description: "This is a mobiles and accessories e-commerce built in pure Html/Css",
    stack: [{name:"HTML 5"}, {name:"CSS 3"}, {name:"JavaScript"}],
    image: "/assets/work/iphonearena.png",
    link: "https://itisusama.github.io/iphonearena/",
  },
   {
    num: "03",
    category: "Frontend Service",
    title: "Prime Chauffeur",
    description: "This is a chauffeuring website built in pure Html/Css, in Laravel and deployed and also built in react js",
    stack: [{name:"React.js"}, {name:"CSS 3"}, {name:"HTML 5"}, {name:"JavaScript"}, {name:"Laravel"}],
    image: "/assets/work/primechauffeur.png",
    link: "https://primechauffeurreact.vercel.app/",
  },
  {
    num: "04",
    category: "Frontend Service",
    title: "iChauffeur",
    description: "This is a chauffeuring website built in pure Html/Css, in Laravel and deployed and also built in react js",
    stack: [{name:"HTML 5"}, {name:"CSS 3"}, {name:"JavaScript"}],
    image: "/assets/work/ichauffeur.png",
    link: "https://itisusama.github.io/ichauffeur/",
  },
  {
    num: "05",
    category: "Frontend Ecommerce",
    title: "Wood Mart",
    description: "This is a furniture site website built and deployed in react",
    stack: [{name:"HTML 5"}, {name:"CSS 3"}, {name:"React.js"}],
    image: "/assets/work/woodmart.png",
    link: "https://woodmart-sand.vercel.app/",
  },
  {
    num: "06",
    category: "Full Stack",
    title: "Usama Hassan Portfolio",
    description: "This is my personal portfolio build with frontend with REST API",
    stack: [{name:"REST API"}, {name:"NEXT.js"}, {name:"Node.js"}, {name:"Tailwind CSS"}, {name:"ShadCN"}],
    image: "/assets/work/portfolio.png",
    link: "https://www.usamahassanasi.com",
  },

  {
    num: "07",
    category: "MERN Stack",
    title: "Workout Buddy",
    description: "This is a workout CRUD app with REST API",
    stack: [{name:"REST API"}, {name:"React.js"}, {name:"Node.js"}, {name:"Tailwind CSS"}],
    image: "/assets/work/workout-buddy.png",
    link: "https://mern-app-pi-sandy.vercel.app/",
  },

  {
    num: "08",
    category: "Full Stack",
    title: "Writers Editor",
    description: "This is a writers editor CRUD app with Local API",
    stack: [{name:"LOCAL API"}, {name:"NEXT.js"}, {name:"Node.js"}, {name:"Tailwind CSS"}],
    image: "/assets/work/editor.png",
    link: "https://my-story-sandy.vercel.app/",
  },
  {
    num: "09",
    category: "Full Stack",
    title: "Trinity AssetCare",
    description: "Developed a responsive website for asset management services.",
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
    ],
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1", // office assets
    link: "https://trinity-assetcare.com/",
  },
  {
    num: "10",
    category: "Full Stack Service",
    title: "Hive Cleaning SVC",
    description: "Website for a professional cleaning service company.",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
    ],
    image: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8", // cleaning service
    link: "https://www.hivecleaningsvc.com/",
  },
  {
    num: "11",
    category: "Full Stack Platform",
    title: "Networking Executives",
    description: "A professional networking platform built for executives and business owners.",
    stack: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "Firebase" },
    ],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786", // business networking
    link: "https://networkingexecutives.com/",
  },
  {
    num: "12",
    category: "Full Stack",
    title: "Web-Tonic Solutions",
    description: "Professional website development and digital solutions company.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // web dev workspace
    link: "https://webtonic-solutions.vercel.app/",
  },
  {
    num: "13",
    category: "Full Stack",
    title: "Cast Sphere",
    description: "A creative casting platform to help authors choose characters for their novels.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Express" },
      { name: "TypeScript" },
      { name: "PostgreSQL" }
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // storytelling concept
    link: "https://cast-sphere-showcase.vercel.app/",
  },
  {
    num: "14",
    category: "Projects Collection",
    title: "Side Projects",
    description: "A collection of various innovative projects and web app tools.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" }
    ],
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51", // creative workspace
    link: "https://projects-zeta-beryl.vercel.app/",
  },
  {
    num: "15",
    category: "Full Stack",
    title: "Red-Connect",
    description: "A digital blood donation platform that connects donors and recipients.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
    image: "https://images.unsplash.com/photo-1603398938378-127d1f0e5b69", // medical/health theme
    link: "https://red-connect-tawny.vercel.app/",
  },
  {
    num: "16",
    category: "Full Stack Productivity",
    title: "Work Nest",
    description: "A shareable task management system for teams and individuals.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Drizzle" },
      { name: "Next API" },
      { name: "PostgreSQL" }
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", // productivity theme
    link: "https://work-nest-five-cyan.vercel.app/",
  },
  {
    num: "17",
    category: "Full Stack Health",
    title: "DIP (Web)",
    description: "A web-based clinic management system for digital patient tracking.",
    stack: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Postgres" }
    ],
    image: "https://images.unsplash.com/photo-1580281657521-8b79bbed2983", // healthcare app
    link: "https://dip-pi.vercel.app/",
  },
  {
    num: "18",
    category: "Full Stack Utility",
    title: "Short Vault",
    description: "An encrypted, password-protected link shortening system.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "ShadCn" },
      { name: "NEXT API" },
      { name: "MongoDB" }
    ],
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67", // cybersecurity theme
    link: "https://short-vault.vercel.app/",
  }
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

