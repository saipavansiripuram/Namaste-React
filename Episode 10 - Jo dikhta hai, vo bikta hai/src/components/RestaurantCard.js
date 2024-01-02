import { CDN_URL } from "../utils/constants";
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
  
    return (
      <div className="m-4 p-4 w-[300px] bg-slate-400 rounded-r-md">
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
     
      </div>
    );
  };


  export default ReastaurantCard;