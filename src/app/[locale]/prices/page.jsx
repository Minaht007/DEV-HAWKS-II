import PriceForTAbAndDev from "../../../components/priceTabDev";
import PricesForMobile from "../../../components/pricesTabMobile"
 
const PricePage = ()=> {
    return(
        <div >
            <div className="sm:visible md:hidden">
                <PricesForMobile />
            </div>

            <div className="hidden md:block desk:visible">
                <PriceForTAbAndDev/> 
            </div>
        </div>
    )
}

export default PricePage;