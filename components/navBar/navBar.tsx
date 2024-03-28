import Image from "next/image"
import Logo from '@/public/logo.svg'

// components
import { NavMenu } from "./navMenu"
import { ModeToggle } from "./modeToggle"

const NavBar = () => {
  return (
    <>
        <header className="w-full py-2 px-48 my-4 sticky top-0 adbsolute z-10">
          <div className="justify-between flex items-center gap-4 border px-4 rounded-md bg-[#EEFBF3]">
            <Image src={Logo} alt="logo" width={150} height={100} />
            <div className=""><NavMenu /></div>
            <div className="py-2"><ModeToggle /></div>
          </div>
        </header>
    </>
  )
}

export default NavBar