import banner from "../assets/ecommerce-banner.avif"
import Button from "../ui/Button"
import "../index.css"
import Typewriter from "../ui/Typewriter"

export default function Hero() {
    
  return (
  
    <div className="flex justify-around pt-10 lg:pt-44 text-slate-700  lg:bg-gradient-to-r from-white from-80% via-lime-500 via-10% to-lime-800 to-10% ">
      <div className="p-20 font-bold flex flex-col gap-5  text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl">Leading Enterprise</h1>
        <h1 className="text-3xl lg:text-5xl">Ecommerce Platform in India</h1>
        <div className="text-xl lg:text-2xl">
            Build whitelabelled <Typewriter text="B2C Marketplaces" delay={100} /></div>
        <p className="font-normal text-lg lg:text-xl">Designed for diverse B2B and B2C business models</p>
        <Button title="SCHEDULE A DEMO" px="4" py="2" width="w-52" />
          </div>
      <img className="hidden h-[500px] w-[340px] lg:block   " src={banner} alt="banner-img" />
    </div>
  )
}
