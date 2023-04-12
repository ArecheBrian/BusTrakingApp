import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'react-native-url-polyfill/auto'
import { getDRoutes } from "../../Supabase/conducto/getRoute";

export const fetchBusDriRouts = createAsyncThunk(
    "DRoutes/ussers",
    async(id)=> {
        try {
            const Stops = await getDRoutes(id)
            if (Stops) return Stops[0]
        } catch(error){
            console.log("error fetching products", err, err.message);
        } 
    }
)
const initialState = {
    routesData: null, status: 'idle' // 'pending' // 'failed' // 'success' 
}
const driverRSclice = createSlice({
    name: "driverRSclice",
    initialState,
    extraReducers(builder) {
        builder
          .addCase(fetchBusDriRouts.fulfilled, (state, action) => {
            state.routesData = action.payload;
            state.status = "success";
          })
          .addCase(fetchBusDriRouts.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(fetchBusDriRouts.rejected, (state, action) => {
            state.status = "failed";
          });
      },
})
export default driverRSclice.reducer;