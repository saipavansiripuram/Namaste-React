import resList from "../utils/mockData";
import ReastaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local State variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // Hook is javascript function which react gives to us , which has specific usecase

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    // console.log("useeffect called")
    fetchData();
  }, []); // Two arguments  callback function + array
  // This callback function is called after the body has been rendered
  //  We want to do something after the body has been rendered we use useEffect Hook

  // Fetch is given by browsers , js engines
  // this fetch will data from the API

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4966976&lng=78.3616081&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); // fetch will return a promise

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Loading
  // Conditional Rendering

  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>;
  // }

  // Browser is blocking us to fetch data from API ,CORS
  // async is the standard practice

  // Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurants or Food"
            value={searchText}
            onChange={(e) => {
              setSearchText (e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurants and Update the UI
              //  searctText = 
              console.log(searchText);

              const filteredRestaurants =  listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurants);
            }}

          > 
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating < 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Low Rated Restaurants
        </button> */}
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restau) => (
          <ReastaurantCard key={restau.info.id} resData={restau} />
        ))}
      </div>
    </div>
  );
};

export default Body;
