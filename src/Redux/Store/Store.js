import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "../Features/testSlice"

export const store = configureStore({
    reducer: {
        name: nameSlice
    }
})