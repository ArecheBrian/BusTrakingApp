import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
    name: "tickets",
    initialState: {
        price: "$30 RD",
        quantity: "2",
        routeName:"Villa mella",
        travelDate: "23/03/2023",
        hourDate: "2:00 pm",


    },
    reducers: {}

});

export default ticketSlice.reducer;