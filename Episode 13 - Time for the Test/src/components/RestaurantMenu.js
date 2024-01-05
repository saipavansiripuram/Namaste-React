import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantMenu = () => {
  // const [resInfo ,setResInfo] = useState(null);

  const { resId } = useParams();


  const [showIndex,setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  const dummy = "Dummy Data"
  // useEffect(()=>{
  //     fetchMenu();
  // },[]);

  // const fetchMenu = async ()=>{
  //     const data = await fetch(
  //          MENU_API + resId
  //     );
  //     const json = await data.json();

  //     setResInfo(json.data);

  // }

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,

  } = resInfo?.cards[0]?.card?.card?.info ?? {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ?? {};

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      c =>
        c.card?.["card"]?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards); 

  return (
    <div className="text-center">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg">
      {cuisines.join(', ')} - {costForTwoMessage}
    </p>
    {/* categories accordions */}
    {categories.map((category ,index) => (
      // Controlled Component
      <RestaurantCatagory
        key={category?.card?.card.title}
        data={category?.card?.card}
        showItems={index === showIndex ? true: false}
        setShowIndex={()=>setShowIndex(index)}
        dummy={dummy}
      />
    ))}
  </div>

  );
};

export default RestaurantMenu;
