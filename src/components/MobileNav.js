"use client"
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci"

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "blogs", path: "https://blogs.usamahassanasi.com/" },
    { name: "Books", path: "https://stories.usamahassanasi.com/" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
]

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-40 text-center font-2xl'>
                <Link href="/"><h1 className='font-4xl font-semibold  mb-20'>Usama H<span className='text-accent'>.</span> Portfolio</h1></Link>
            
            <nav className='flex flex-col gap-8'>
                {
                links.map((link, index)=>(
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent"} capitalize hover:text-accent font-medium transition-all cursor-pointer`}>{link.name}</Link>
                ))
            }
            </nav>

            </div>

        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
