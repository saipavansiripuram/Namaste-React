import { CDN_URL } from "../utils/constants";

const ItemList = ({ items,dummy }) => {
//   console.log(items);
console.log(dummy);
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
            
        <button className="p-2 bg-black text-white shadow-lg absolute mx-2 my-3 rounded-2xl"> Add+</button>
        <img className="w-full rounded-lg " src={CDN_URL + item.card.info.imageId }/>
                </div>
        </div>
        
      ))}
    </div>
  );
};

export default ItemList;
