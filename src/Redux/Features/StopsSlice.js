import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'react-native-url-polyfill/auto'
import { getStops } from "../../Supabase/Maps/getStops";

export const fetchBusStops = createAsyncThunk(
    "Stops/ussers",
    async()=> {
        try {
            const Stops = await getStops()
            if (Stops) return Stops
        } catch(error){
            console.log("error fetching products", err, err.message);
        } 
    }
)
const initialState = {
    stopsData: null, status: 'idle' // 'pending' // 'failed' // 'success' 
}
const stopsSlice = createSlice({
    name: "stopsSclice",
    initialState,
    extraReducers(builder) {
        builder
          .addCase(fetchBusStops.fulfilled, (state, action) => {
            state.stopsData = action.payload;
            state.status = "success";
          })
          .addCase(fetchBusStops.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(fetchBusStops.rejected, (state, action) => {
            state.status = "failed";
          });
      },
})
export default stopsSlice.reducer;