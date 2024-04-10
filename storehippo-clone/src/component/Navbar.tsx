import Arrow from "../ui/Arrow";
import Hamburger from "../ui/Hamburger";
import logo from "../assets/store-logo.webp"
import Button from "../ui/Button";
import { useGetScrollPos } from "../hooks/useGetScrollPos";

export default function Navbar() {
    const positon = useGetScrollPos()
    const style = positon > 5 ? "bg-white fixed":"absolute"
  return (
    <div className={`flex justify-around py-3  w-full ${style} `}>
    <img className="w-48  h-18" src={logo} alt="logo" />
    <div className="self-center hidden lg:block">
      <ul className="flex  gap-8">
        <li className="flex items-center">Solutions <Arrow/></li>
        <li className="flex items-center">Develop <Arrow/></li>
        <li>Example </li>
        <li>Pricing</li>
        <li className="flex items-center">Resources <Arrow/></li>
      </ul>
    </div>
    <div className="flex gap-5">
        <div className="hidden lg:block self-center">

    <Button title="CONTACT US" px="10" py="4" />
        </div>
        <p className="lg:hidden block text-lg self-center" >Menu</p>
    {/* <a className="transition-all px-10 py-4 border-lime-600   hover:bg-white hover:text-lime-600 hover:border-lime-600 border text-sm font-medium  bg-lime-600 text-center text-slate-50 rounded-3xl" href="#">CONTACT US</a> */}
    <Hamburger />
    </div>
    </div>
  )
}
