import { useState, useEffect } from "react"
import Shimmer from "../../../Part 3/src/Components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null)

    // initial null dilay.

    // const paramas = useParams()
    // console.log(paramas)

    const {resId} = useParams()

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        console.log(json)
        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer/>

    // const {name,cuisines, areaName, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)

    return (
        <>

            <div className="menu">
                <h1>{name}</h1>
                <h1>{cuisines.join(" | ")}</h1>
                <h3>{areaName}</h3>
                {/* <h5>{costForTwoMessage}</h5>
                <h2>{itemCards[0]?.card?.info?.name}</h2>
                <h2>{itemCards[1]?.card?.info?.name}</h2>
                <h2>{itemCards[2]?.card?.info?.name}</h2>
                <h2>{itemCards[3]?.card?.info?.name}</h2>
                <h2>{itemCards[4]?.card?.info?.name}</h2>
                <h2>{itemCards[5]?.card?.info?.name}</h2> */}
                {
                    itemCards.map((item)=>{
                        return(
                            <p key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultprice/100}</p>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RestaurantMenu