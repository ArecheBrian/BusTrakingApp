import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'react-native-url-polyfill/auto'
import * as Location from 'expo-location';

export const getLocation = createAsyncThunk(
    "Location/ussers",
    async()=> {
        try {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                alert('Noooo ')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            const current = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude 
            }
            return current
        } catch(error){
            console.log("error fetching products", err, err.message);
        } 
    }
)
const initialState = {
    userLocation: null, status: 'idle' // 'pending' // 'failed' // 'success' 
}
const locationSlice = createSlice({
    name: "LocationSlice",
    initialState,
    extraReducers(builder) {
        builder
          .addCase(getLocation.fulfilled, (state, action) => {
            state.userLocation = action.payload;
            state.status = "success";
          })
          .addCase(getLocation.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getLocation.rejected, (state, action) => {
            state.status = "failed";
          });
      },
})
export default locationSlice.reducer;