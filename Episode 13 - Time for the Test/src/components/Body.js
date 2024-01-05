import resList from "../utils/mockData";
import ReastaurantCard,{withPromotedLevel} from "./RestaurantCard";
import { useEffect, useState ,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");


  const RestaurantCardPromoted = withPromotedLevel(ReastaurantCard);
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4966976&lng=78.3616081&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING" //old pro
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

      const { loggedInUser ,setUserName }= useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="flex items-center  m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className=" rounded-sm border border-solid border-black"
            placeholder="Search Restaurants or Food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="search m-4 p-4">

          <button
            className="px-4 py-2  bg-gray-400 hover:bg-slate-800 text-white btn-primary m-4 rounded-r-lg"
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
            className="px-4  py-2 bg-gray-400 hover:bg-slate-800 text-white rounded-lg btn btn-primary m-4"
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


        {/* Username */}
        <div className="m-4 p-4 flex items-center ">
          <label>Username :  </label>
          <input
            type="text"
            className="rounded-sm border border-solid border-black"
            placeholder=". User Name"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
       
          
        
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restau) => (
          <Link key={restau.info.id} to={"/restaurants/" + restau.info.id}>
            {
              restau.info.isOpen  ? <RestaurantCardPromoted resData={restau}/> : <ReastaurantCard resData={restau} />
            }
           
          </Link>
        ))}
   
      </div>
    </div>
  );
};

export default Body;
