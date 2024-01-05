import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // State is initial state
    addItem: (state, action) => {
      // it gets two parameters state and action
    //   mutating the state over here2
      state.items.push(action.payload);

      // redux in the background doing that it creating the immutable 



      // Vanila (older ) Redux - Dont mutate state (Before redux used to say , dont mutate the state diretly)
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit ,uses immer BTS
      // In this we have to mutate the state 
    },
    removeItem: (state,action) => {
      // state.items.pop();
      state.items.splice(action.payload, 1);
    },
    clearCart: (state,action) => {
      // state=[]; if we modify directly the state it wont work
      state.items.length = 0;
      // RTX says either Mutate the exisiting state or return a new State
      // State.items.length = 0; // Original State = []
    // return {item:[]}
    },
  },
});

//  when we do a create slice that create slice will return an object in the cart Slice
// {
//     actions:{
//         addItem
//     },
//     reducer
// }

export const {addItem,removeItem,clearCart} = cartSlice.actions;


export default cartSlice.reducer;

