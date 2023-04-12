import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'react-native-url-polyfill/auto'
import { getProfile } from "../../Supabase/user/getProfile";

export const getUserProfile = createAsyncThunk(
    "userProfile/ussers",
    async(id)=> {
        try {
            const Rutas = await getProfile(id)
            if (Rutas) return Rutas
        } catch(error){
            console.log("error fetching products", err, err.message);
        } 
    }
)
const initialState = {
    profileData: null, status: 'idle' // 'pending' // 'failed' // 'success' 
}
const routeSlice2 = createSlice({
    name: "ProfilesSlices",
    initialState,
    extraReducers(builder) {
        builder
          .addCase(getUserProfile.fulfilled, (state, action) => {
            state.profileData = action.payload;
            state.status = "success";
          })
          .addCase(getUserProfile.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getUserProfile.rejected, (state, action) => {
            state.status = "failed";
          });
      },
})
export default routeSlice2.reducer;