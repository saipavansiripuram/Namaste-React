import resList from '../utils/mockData'
import ReastaurantCard from './RestaurantCard';
import {useState} from 'react';


const Body = () => {

  // State variable - Super Powerful Variable
  // React Hook is a normal Javascript function which is given by React 
  // That function comes with some super functions

  const [listOfRestaurants,setListOfRestaurants] = useState(resList); // Superpowerfull State variables by react
// We are creating in a different way , we are modifying ina different way by function
// setListOfRestaurants is to update the state variables
// Whenever a state variable updates react rerenders the component

// React makes this DOM operations super fast
 
// const arr = useState(resList);
// const [listOfRestaurants,setListOfRestaurants] = arr;




  // Normal JS variable
  // let listOfRestaurantsJS = [
  //   {
  //     "info": {
  //       "id": "755854",
  //       "name": "Leon's - Burgers & Wings (Leon Grill)",
  //       "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
  //       "locality": "Sri Rangapuram Colony",
  //       "areaName": "Miyapur",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "American",
  //         "Fast Food"
  //       ],
  //       "avgRating": 4.3,
  //       "parentId": "371281",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "100+",
  //       "sla": {
  //         "deliveryTime": 20,
  //         "lastMileTravel": 2.2,
  //       },
  //     },
  //   },
  //   {
  //     "info": {
  //       "id": "123",
  //       "name": "Dominos",
  //       "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
  //       "locality": "Sri Rangapuram Colony",
  //       "areaName": "Miyapur",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "American",
  //         "Fast Food"
  //       ],
  //       "avgRating": 4.5,
  //       "parentId": "371281",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "100+",
  //       "sla": {
  //         "deliveryTime": 20,
  //         "lastMileTravel": 2.2,
  //       },
  //     },
  //   },
  //   {
  //     "info": {
  //       "id": "123123",
  //       "name": "MCD",
  //       "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
  //       "locality": "das Colony",
  //       "areaName": "Hydeabad",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "American",
  //         "Fast Food"
  //       ],
  //       "avgRating": 4.6,
  //       "parentId": "371281",
  //       "avgRatingString": "4.6",
  //       "totalRatingsString": "100+",
  //       "sla": {
  //         "deliveryTime": 20,
  //         "lastMileTravel": 2.2,
  //       },
  //     },
  //   },
  // ];


    return (
      <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
              // Filter Logic
              // listOfRestaurants = listOfRestaurants.filter((res)=>res.info.avgRating>4.3
           
              // );
              // console.log(listOfRestaurants);
              const filterList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
              setListOfRestaurants(filterList); 
            }}
            >Top Rated Restaurants</button>
            <button className="filter-btn" onClick={()=>{
              const filterList = listOfRestaurants.filter((res)=>res.info.avgRating<4);
              setListOfRestaurants(filterList); 
            }}
            >Low Rated Restaurants</button>
          </div>
        <div className="res-container">
         {
          listOfRestaurants.map((restau)=>(<ReastaurantCard key={restau.info.id} resData={restau }/>))
         }
  
        </div>
      </div>
    );
  };

  export default Body;