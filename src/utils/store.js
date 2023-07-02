import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});


export default store;


/**
 * Create Store
 *  - configureStore() - RTK
 * 
 * Provide my store to App
 *  - <Provider store={store}> - import {Provider} from "react-redux"
 * 
 * Slice - RTK
 *  - const cartSlice = createSlice(){
 *        name:"name",
 *        initialState: {},
 *        reducers:{
 *               addItem: (state, action) => {state = action.payload},
 *               userItem: (state, action) => {state = action.payload},
 *        }   
 * }
 * 
 * export {addItem, clearCart }= cartSlice.actions;
 * export default   cartSlice.reducer;
 * 
 * 
 * PUT that slice in the store
 *  - configureStore({
        reducer: {
                cart: cartSlice,
                user: userSlice,
        },
      });
 */