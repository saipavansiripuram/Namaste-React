import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatagory = ({ data ,showItems,setShowIndex,dummy }) => {
  // const [showItems,setShowItems] = useState(false);
  const handleClick = () => {
       // setShowItems(!showItems);
       setShowIndex();

  }
  return (
    <div>
      <div className="w-8/12 mx-auto my-4 bg-slate-200 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer " onClick={handleClick} >
          <span className="font-bold text-lg">{data.title}</span>
          <span>⬇</span>
        </div>
       {showItems  && <ItemList items={data.itemCards}  dummy={dummy}/>}
      </div>
    </div>
  );
};

export default RestaurantCatagory;
