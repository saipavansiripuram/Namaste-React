import resList from "../utils/mockData";
import ReastaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4966976&lng=78.3616081&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div>
        <h1 style={{ color: "red" }}>
          Looks Like you are offline! Check your internet connection
        </h1>
      </div>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="flex m-4 p-4">
          <input
            type="text"
            className="rounded-r-lg border border-solid border-black"
            placeholder="Search Restaurants or Food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="search m-4 p-4">

          <button
            className="px-4 py-2 bg-green btn-primary m-4 rounded-r-lg"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>

          
          </div>
          <div className="search m-4 p-4">

          <button
            className="px-4  py-2 bg-green btn btn-primary m-4"
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restau) => (
          <Link key={restau.info.id} to={"/restaurants/" + restau.info.id}>
            {" "}
            <ReastaurantCard resData={restau} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
