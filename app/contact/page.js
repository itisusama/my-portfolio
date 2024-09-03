"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Description } from "@radix-ui/react-dialog"
import { motion } from "framer-motion"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "+923074518566"
  },
  {
    icon: <FaEnvelope/>,
    title: "Personal Email",
    description: "ahmarkhan1233456@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: "Location",
    description: "Lahore Cantt"
  }
]


const Contact = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{
      opacity:1,
      tramsition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                If you have any questions or want to discuss a project, feel free to reach out to me.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" required />
                <Input type="lastname" placeholder="Lastname" required/>
              </div>
              <Input type="company" placeholder="Company name" required/>
              <Textarea className="h-[200px]" placeholder="Type Your Message Here..." required/>
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-white/60">{item.title}</h3>
                      <p className="text-xl">{item.description}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
