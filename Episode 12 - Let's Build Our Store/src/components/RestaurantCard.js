import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const ReastaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
      locality,
      areaName,
      sla,
    } = resData?.info ?? {};

    const {loggedInUser} = useContext(UserContext)
  
    return (
      <div className="m-4 p-4 w-[300px] bg-slate-100 rounded-r-md hover:bg-slate-300">
        <img
          className="res-logo rounded-r-md"
          src={CDN_URL+cloudinaryImageId}
          alt="food"
        />
         <h3>{name}</h3>
        <h4>Cuisines : {cuisines.join(", ")}</h4>
        <h4>Ratinngs : {avgRating} </h4>
        <h4>Locality: {locality +", "+ areaName}</h4>
        <h5>Cost : {costForTwo} <br></br> Delivary Time : { sla.slaString} </h5>
        <h1>{loggedInUser}</h1>
      </div>
    );
  };

  // Higher order component 

  // Input and output restaurant card promoted 


  export const withPromotedLevel = (ReastaurantCard)=>{
   return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded -lg">open</label>
        <ReastaurantCard {...props}/>
      </div>
    )
   }
  }

  export default ReastaurantCard;