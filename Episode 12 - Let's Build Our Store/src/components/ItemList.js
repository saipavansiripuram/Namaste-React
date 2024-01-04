import { CDN_URL } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items,dummy }) => {
//   console.log(items);
// console.log(dummy);


  const dispatch = useDispatch();
const handleAddItem=(item)=>{
  //  Dispatch an action
  dispatch(addItem(item));
  // {
  //   payload
  // Create a object , take that object 
  // Whatever sent , it will go inside payload
  // }

}



  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between" 
        >   
        <div className="w-9/12">
          <div className="py-2">
            <span className="font-bold text-l">{item.card.info.name}</span> <br></br>
            <span className="font-medium"> ₹ {item.card.info.price ? item.card.info.price /100:item.card.info.defaultPrice /100}</span>
          </div>
          
          <p className=" font-light">{item.card.info.description}</p>
          </div>
      
          <div className="w-3/12 p-4">
            
        <button className="p-2 bg-black text-white shadow-lg absolute mx-2 my-3 rounded-2xl" onClick={()=>handleAddItem(item)} > Add+</button>
        <img className="w-full rounded-lg " src={CDN_URL + item.card.info.imageId }/>
                </div>
        </div>
        
      ))}
    </div>
  );
};

export default ItemList;
