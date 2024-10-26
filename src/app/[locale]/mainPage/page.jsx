import Hero from "@/components/hero"
import Advantage from "@/components/advantages"
import AboutUs from "@/components/aboutUs"
import Services from "@/components/services"
import OurTeam from "@/components/ourTeam"
// import Contacts from "@/components/contacts"

const MainPage = () => {
    return (
        <div className="relative layout">
           <Hero/>
           <Advantage />
           <AboutUs/>
           <Services/>
           <OurTeam />
           {/* <Contacts/> */}
        </div>
    )
}

export default MainPage;