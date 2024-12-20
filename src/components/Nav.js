"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "blogs", path: "https://blogs.usamahassanasi.com/" },
    { name: "Books", path: "https://stories.usamahassanasi.com/" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
]

const Nav = () => {
    const pathname = usePathname()
  return (
    <nav className="flex gap-8">
        {
            links.map((link, index)=>(
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize hover:text-accent font-medium transition-all cursor-pointer`}>{link.name}</Link>
            ))
        }
    </nav>
  )
}

export default Nav
