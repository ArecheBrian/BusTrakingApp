import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
}

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        }
    }
})

export const {setOrigin , setDestination} = SearchSlice.actions;

export const selectOrigin = (state) => state.Search.origin;
export const selectDestination = (state) => state.Search.destination;

export default SearchSlice.reducer;