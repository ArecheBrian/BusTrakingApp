import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
    name: "Route",
    initialState: {
        routeName: "",
        start: "",
        end: "",

    },
    reducers: {},
});

export default routeSlice.reducer;