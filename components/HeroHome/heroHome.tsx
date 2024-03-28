import { Button } from "@/components/ui/button";
import Image from "next/image";
import slide1 from "@/public/slider-1.webp";
const HeroHome = () => {
  return (
    <section className="bg-[#EEFBF3] h-screen w-full -z-10">
        <div className="grid grid-cols-2 gap-4 w-full items-center justify-between h-full px-48">

          <div className="w-full h-full border flex flex-col container mx-auto justify-center gap-4">
            <p className="text-[#309255] text-lg">
              Start your favourite course
            </p>
            <h1 className="text-[#212832] text-4xl">
              Now learning from anywhere, and build your <span className="text-[#309255]">bright career.</span>
            </h1>
            <p className="text-gray-500 text-xl">
              It has survived not only five centuries but also the leap into electronic typesetting.
            </p>
            <div className="block mt-4">

            <Button className="py-2 px-6 bg-[#309255] hover:bg-[#212832]">Start a Course</Button>
            </div>
          </div>
          <div className="h-full w-full items-end flex">
            <Image src={slide1} alt="slide1" className="w-full"/>
          </div>
        </div>
      </section>
  )
}

export default HeroHome