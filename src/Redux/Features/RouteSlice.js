import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'react-native-url-polyfill/auto'
import { getRoutes } from "../../Supabase/Maps/getRoutes";

export const fetchBusRoutes = createAsyncThunk(
    "Routes/ussers",
    async()=> {
        try {
            const Rutas = await getRoutes()
            if (Rutas) return Rutas
        } catch(error){
            console.log("error fetching products", err, err.message);
        } 
    }
)
const initialState = {
    routesData: null, status: 'idle' // 'pending' // 'failed' // 'success' 
}
const routeSlice = createSlice({
    name: "routeSlice",
    initialState,
    extraReducers(builder) {
        builder
          .addCase(fetchBusRoutes.fulfilled, (state, action) => {
            state.routesData = action.payload;
            state.status = "success";
          })
          .addCase(fetchBusRoutes.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(fetchBusRoutes.rejected, (state, action) => {
            state.status = "failed";
          });
      },
})
export default routeSlice.reducer;