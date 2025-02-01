import Image from "next/image";
import Navigation from "./customer/components/Navigation/Navigation";
import Homecarosel from "./customer/components/Homecarosel/MainCarosel";
import HomeSectionCard from "./customer/components/HomeSectionCard/HomeSectionCard";
import { HomePage } from "./customer/pages/HomePage/HomePage";
export default function Home() {
  return (
   <div className="">
   <Navigation/>
   <div>
    <HomePage/>
    </div>
   </div>
  //  {/* <Homecarosel></Homecarosel> */}
  //  <HomeSectionCard></HomeSectionCard>
  //  </>
  );
}
