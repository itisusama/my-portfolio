"use client"
import Link from "next/link"
import { FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa"

const socialsIcons = [
    { icon: <FaGithub />, url: "https://github.com/itisusama?tab=repositories"},
    { icon: <FaYoutube />, url: "https://www.youtube.com/channel/UCXvywF3TUV726GnpQ6t8Mxw"},
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/usama-hassan-02a6b522a/"},
]

const Socials = () => {
  return (
    <div className="text-2xl text-white/80 flex gap-8 my-8 items-center justify-center xl:my-[-34px]">
      {socialsIcons.map((social, index) => (
        <Link key={index} href={social.url} target="_blank" className="hover:text-accent">{ social.icon }</Link>
        ))}
    </div>
  )
}

export default Socials
