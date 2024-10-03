import Hero from "@/components/hero"
import Advantage from "@/components/advantages"
import AboutUs from "@/components/aboutUs"
import Services from "@/components/services"

const MainPage = () => {
    return (
        <div className="relative">
           <Hero/>
           <Advantage />
           <AboutUs/>
           <Services/>
        </div>
    )
}

export default MainPage;