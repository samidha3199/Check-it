import { useState, useEffect } from "react"
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "../../../Part 3/src/Components/Shimmer";


const RestaurantMenu1 = ()=>{

    const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams
    // const params = useParams()
    // console.log(params)

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        // const data = await fetch(MENU_URL + resId )
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405")
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()
        // console.log(json)
        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

    const {itemCards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card
    console.log(itemCards)

    return (
        <>

            <div className="menu">
                <h1>{name}</h1>
                <h2>{cuisines.join(" | ")}</h2>
                <p>{costForTwoMessage}</p>
                <ul>
                    {
                        itemCards.map((items)=>{
                            return(
                                <li key={items.card.info.id}>
                                    {items.card.info.name} - {"Rs."} {items.card.info.defaultPrice/100 || items.card.info.price/100}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default RestaurantMenu1