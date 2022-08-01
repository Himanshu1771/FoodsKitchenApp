import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

 export const fetchAsyncFeeds = createAsyncThunk('store/fetchAsyncFeeds', async () => {
  const response = await axios.get("http://127.0.0.1:5500/foodapp/src/components/feeds.json")
  return response.data;
})


 export const StoreSlice = createSlice({
  name: 'store',
  initialState:{
    store: {},
    cartitem:[]
  },
  reducers: {

    removeDetails:(state) =>{
      state.Details = {};

    },
    addcart(state,actions){
      const itemIndex = state.cartitem.findIndex((item) => item.id === actions.payload.id);
      if (itemIndex >= 0) 
      {
        state.cartitem[itemIndex].cardQuantity += 1;
      } else {
      const tempProduct = {...actions.payload,cardQuantity:1}  
      state.cartitem.push(tempProduct);
     } },
 
    removecart(state,actions) {
      const items = state.cartitem.filter(cartitem => cartitem.id !== actions.payload.id);
      state.cartitem = items
    }
  },

  extraReducers:{

    [fetchAsyncFeeds.pending]:() =>{
      console.log("pending");
    },
    [fetchAsyncFeeds.fulfilled]:(state,{payload}) =>{
      console.log("fulfilled");
      return {...state,store:payload}
    },
    [fetchAsyncFeeds.rejected]:() =>{
      console.log("rejected");

    },
  }
})


export const {removeDetails,addcart,removecart} = StoreSlice.actions;

export const getallfeeds = (state) => state.store.store

export default StoreSlice.reducer