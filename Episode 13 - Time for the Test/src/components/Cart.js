import {useSelector , useDispatch} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const Cart =()=>{
    const cartItems = useSelector((store)=>store.cart.items); // make sure you are subscribing the right portion of the store

    // It will work this also 
    // const store = useSelector((store)=>store); 
    // const cartItems = store.cart.items;

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    const handleRemoveItem = (index) => {
        dispatch(removeItem(index));
      };

   
    const totalPrice = cartItems.reduce((accumulator, item) => {
        const price = item.card.info.price / 100 || item.card.info.defaultPrice / 100;
        return accumulator + price;
      }, 0);
    return(
   
        <div className=" m-4 p-4">
            <h1 className="text-2xl font-bold text-center">Cart</h1>
            <div className="w-6/12 m-auto flex flex-col items-center">
                <button className="p-2 hover:bg-black text-white bg-slate-600 rounded-lg " onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length ===0 && <h1 className="text-center">Cart is empty .Add Items to the cart</h1>}
                <div>
                <ItemList items={cartItems} />
                </div>

                {cartItems.map((item, index) => (
                    <div  key={index} className="flex justify-between items-center ">
                    <h2 key={index}>{item.card.info.name} = { item.card.info.price /100 ||item.card.info.defaultPrice / 100}</h2>
                    <button  className="mx-2 p-2 hover:bg-slate-900 text-white bg-slate-200 rounded-lg "  onClick={() => handleRemoveItem(index)}>❌</button>
                    </div>
                    ))}
                    <div className=" flex flex-col items-end">
                        <h1>---------------</h1>
             <h1 className="text-right" >Total Price : {totalPrice}</h1>
             <h1>---------------</h1>
                    </div>
            </div>
        </div>
    )
}

export default Cart;