"use cllient"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { FiDownload } from "react-icons/fi"
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto xl:relative">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left">
            <h1 className="font-semibold mb-4 xl:mb-8">Software Engineer</h1>
            <h1>
              <span className="text-4xl font-bold">Hi, I'm</span>
              <span className="text-4xl font-bold text-accent"> Usama Hassan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            With a passion for problem-solving and a passion for writing clean, efficient code, I bring ideas to life through innovative software solutions. Let's build something extraordinary together.
            </p>
            <Button variant="outline">
              <a href="https://drive.google.com/file/d/1dl0BPtY3skJYXgGt7YKB4Hyhxzc9FuXF/view?usp=sharing" target="_blank"><span>Download CV</span></a>
              <a href="https://shorturl.at/2djrA" target="_blank"><FiDownload className="ml-2" /></a>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials/>
            </div>
          </div>
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
              <img src="/assets/profile.jpg" alt="profile" className="object-contain rounded-full xl:w-[50%] xl:mt-[33%]" />
            </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home
