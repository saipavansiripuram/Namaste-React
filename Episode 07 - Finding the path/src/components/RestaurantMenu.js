import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu =()=>{
    const [resInfo ,setResInfo] = useState(null);

    const {resId}  = useParams();
   
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(
             MENU_API + resId
        );
        const json = await data.json();
        
        setResInfo(json.data);
        
    }

    if(resInfo === null) return <Shimmer/> ;

    const {name ,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info?? {};

    const { itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ??  {};


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <p>Rating : {avgRating}  Cost : {costForTwoMessage}</p>
            <h3></h3>
            <ul >
               {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name} - Price Rs.{item.card.info.price /100 ||item.card.info.defaultPrice /100 }</li>
               ))}
                {/* <li>{itemCards[0].card.info.name}</li> */}
                {/* <li>Cold</li>
                <li>Burger </li>
                <li>Pizza</li>
                <li>Diet Coke</li> */}
            </ul>
        </div>
    )
};

export default RestaurantMenu;