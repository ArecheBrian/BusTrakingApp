import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState:{
        name: "brian"
    },
    reducers: {
        addApellido:(state,action) => {
            state.name += " javier areche minaya"
        }
    }
})

export const {addApellido} = nameSlice.actions

export default nameSlice.reducer