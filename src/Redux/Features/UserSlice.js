import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'react-native-url-polyfill/auto'
import { signInWithEmail } from "../../Supabase/user/SignInUser";

// Definir slice de usuario
export const userSession = createAsyncThunk(
    "Cookpedia/ussers",
    async()=> {
        try {
            const session = await signInWithEmail()
            if (session.session) return session
        } catch(error){
            console.log("error fetching products", err, err.message);
        } 
    }
)
initialState = {
    session: null,
    status: 'idle' // 'pending' // 'failed' // 'success' 
}
const userSlice = createSlice({
    name: "userSlices",
    initialState,
    reducers: {
      resetSlice: (state, action)=> {
        state.session = null,
        state.status = 'idle'
      }
    },
    extraReducers(builder) {
      builder
        .addCase(userSession.fulfilled, (state, action) => {
          state.session = action.payload;           
          state.status = "success";
        })
        .addCase(userSession.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(userSession.rejected, (state, action) => {
          state.status = "failed";
        });
    },
})
export const {resetSlice} = userSlice.actions
export default userSlice.reducer;