"use client"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
  title: "About Me",
  description:"Highly skilled and motivated Software Engineer with a passion for creating robust and innovative web solutions. Proficient in PHP, Python, C++, HTML, JavaScript, CSS, and SCSS, with a track record of delivering high-quality projects on time and exceeding client expectations. Strong problem-solving and analytical abilities, coupled with excellent communication skills. Adaptable, fast learner, and a team player dedicated to delivering top-notch software solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Usama Hassan"
    },
    {
      fieldName: "Phone",
      fieldValue: "+923074518566"
    },
    {
      fieldName: "Total Experience",
      fieldValue: "2 Years"
    },
    {
      fieldName: "Hotmail",
      fieldValue: "usamahassan123"
    },
    {
      fieldName: "Gmail",
      fieldValue: "ahmarkhan1233456"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "I did my job with the following companies",
  items: [
    {
      company: "Fusion Wave",
      position: "Web Developer",
      duration: "Dec 2024 – Aug 2025"
    },    
    {
      company: "DAN DAN SOFTWARE",
      position: "Full Stack Software Developer",
      duration: "Oct 2024 – Dec 2024"
    },
    {
      company: "M-Technologies",
      position: "Web Frontend Developer",
      duration: "October 2023 - Sep 2024"
    },
    {
      company: "Quaid College",
      position: "Web Developer",
      duration: "May 2023 - July 2023"
    },
    {
      company: "Software Alliance",
      position: "Laravel Intern",
      duration: "August 2022 - September 2022"
    },
    {
      company: "Linx",
      position: "Sales Coordinator",
      duration: "October 2022 - March 2023"
    }
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I completed my study here",
  items: [
    {
      institution: "University of South Asia",
      degree: "BSSE, Software Engineering, GPA: 2.96",
      duration: "2022 (4 years)"
    },
    {
      institution: "PAF IT Academy",
      degree: "DIT, 75%",
      duration: "2019"
    },
    {
      institution: "Garrison Boys High School and College",
      degree: "FSc Pre Engineering, 72%",
      duration: "2018"
    },
    {
      institution: "Garrison Boys High School",
      degree: "Matriculation, 74%",
      duration: "2016"
    }
  ]
}

const skills = {
  title: "My Skills",
  description: "I have all the following mentioned skills",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "HTML5"
    },
    {
      icon: <FaCss3/>,
      name: "CSS3"
    },
    {
      icon: <FaJs/>,
      name: "JavaScript"
    },
    {
      icon: <FaReact/>,
      name: "React"
    },
    {
      icon: <FaNodeJs/>,
      name: "Node.js"
    },
    {
      icon: <FaPython/>,
      name: "Python"
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind CSS"
    }

  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      transition: { 
        duration: 0.4,
        delay: 2.4,
        ease: "easeIn"
       }
     }}
     className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      experience.items.map((item, index) => (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[240px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      education.items.map((item, index) => (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[240px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3 mt-6">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grild-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {
                    skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid frid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    about.info.map((item, index) => (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>  
                        <span className="text-xl">{item.fieldValue}</span>  
                      </li>
                    ))
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume

