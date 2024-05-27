import { useState, useEffect } from "react"
import Shimmer from "../../../Part 3/src/Components/Shimmer";

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null)

    // initial null dilay.

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=448490&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        // console.log(json)
        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer/>

    const {name,cuisines, areaName, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

    const {itemsCard} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemsCard)

    return (
        <>

            <div className="menu">
                <h1>{name}</h1>
                <h1>{cuisines.join(" | ")}</h1>
                <h3>{areaName}</h3>
                <h5>{costForTwoMessage}</h5>
            </div>
        </>
    )
}

export default RestaurantMenu