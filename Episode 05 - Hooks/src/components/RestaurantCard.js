import { CDN_URL } from "../utils/constants";
const ReastaurantCard = (props) => {
    // We can also use like this
    // const ReastaurantCard = ({resname , cusine}) => {
    //   <h3>{resname}</h3>
  
    // const {resname, cusine} = props; this is the behind process
  
    // This process is called destructure the props  
    
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
    } = resData?.info ?? {};
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
          alt="food"
        />
         <h3>{name}</h3>
        <h4>Cuisines : {cuisines.join(", ")}</h4>
        <h4>Ratinngs : {avgRating} </h4>
        <h4>Locality: {locality +", "+ areaName}</h4>
        {/* <h4>Area: </h4> */}
        <h5>Cost: {costForTwo} mins</h5>
      </div>
    );
  };


  export default ReastaurantCard;