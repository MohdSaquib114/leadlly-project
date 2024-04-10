import amul from "../assets/logo_1-280x280-amul.avif"
import berger from "../assets/logo_2-280x280-berger.avif"
import momaze from "../assets/logo_3-280x280-momaze.avif"
import syngeta from "../assets/logo_4-280x280-syngenta.avif"
import white from "../assets/logo_6-280x280-white.avif"
import connect from "../assets/logo_7-1-280x280-connect.avif"
import store from "../assets/mystore-280x280-store.avif"
import heading_before_logo from "../assets/heading-before.png"
import Image from "../ui/Image"
import brand_after from "../assets/brand-after.png"


export default function Intro() {
  return (
    <div className="lg:grid grid-cols-2 bg-zinc-100 lg:p-28 pb-20">
      <div className="p-10 flex items-center lg:items-end flex-col lg:gap-5 font-bold text-slate text-center row-end-[-1] lg:text-right col-start-2 text-slate-700">
        <div className="flex lg:justify-end">
        <img className="w-12 h-12" src={heading_before_logo} alt="" />
        <h2 className="text-3xl lg:text-5xl self-center"> Empowering Brands</h2>
        </div>
        <h2 className="text-3xl lg:text-5xl">Across the Globe</h2>
        <p>StoreHippo ecommerce platform builds extraordinary solutions to power brands across 15 countries and 30+ industries. Add your brand to the long list of brands that trust StoreHippo.</p>
      </div>
      <div className="flex gap-1 lg:p-5 ">
        <div className="grid grid-cols-3 gap-2  pl-5">
           <div className="w-52 lg:mt-14">

            <Image imagePath={amul}/>
                  </div>
           <div className="w-40">

            <Image imagePath={berger}/>
           </div>
            <div className="w-52 lg:mt-14">

            <Image imagePath={momaze}/>
            </div>
            <div className="w-52">

            <Image imagePath={syngeta}/>
            </div>
            <div className="w-52 lg:relative lg:top-[-50px]">

            <Image imagePath={white}/>
            </div>
            <div className="w-52">

            <Image imagePath={connect}/>
            </div>
            <div className="w-52 col-start-2 lg:relative lg:top-[-48px]">

            <Image imagePath={store}/>
            </div>
  
           
        </div>
        <img className="w-28 hidden lg:block" src={brand_after} alt="band-after-img" />
      </div>
    </div>
  )
}
