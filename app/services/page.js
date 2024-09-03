"use client"
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const service = [
  {
    num: "01",
    title: "Prompt Engineering",
    desc: "I will write amazing prompts for the exact response you wish.",
    href: "https://www.linkedin.com/in/usama-hassan-02a6b522a/"
  },
  {
    num: "02",
    title: "Frontend Development React",
    desc: "I build responsive, user-friendly, and scalable web applications using React.Js",
    href: "https://www.linkedin.com/in/usama-hassan-02a6b522a/"
  },
  {
    num: "03",
    title: "REST API",
    desc: "I build REST API using Node.js and Express.js. Hosting free test API",
    href: "https://www.linkedin.com/in/usama-hassan-02a6b522a/"
  },
  {
    num: "04",
    title: "Frontend Development Next",
    desc: "I build responsive, user-friendly, and scalable web applications using Next.Js",
    href: "https://www.linkedin.com/in/usama-hassan-02a6b522a/"
  },
  {
    num: "05",
    title: "Core Javascript or Python Algorithms",
    desc: "I will make understandable working algorithms for web applications using Core Javascript or Python", 
    href: "https://www.linkedin.com/in/usama-hassan-02a6b522a/"
  },
  {
    num: "06",
    title: "Data Scrap",
    desc: "I will extract data for from the competitor website for your web applications",
    href: "https://www.linkedin.com/in/usama-hassan-02a6b522a/"
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
              }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" >
          {
            service.map((item, index) => (
              <div key={index} className="flex-1 flx flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{ item.num }</div>
                  <Link href={item.href} target="_blank" className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2>{ item.title }</h2>
                <p>{ item.desc }</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            ))
          }
          </motion.div>
      </div>
    </section>
  )
}

export default Services
