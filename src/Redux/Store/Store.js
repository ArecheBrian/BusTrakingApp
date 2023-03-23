import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "../Features/testSlice";
import userSlice from "../Features/UserSlice";
import ticketSlice from "../Features/TicketSlice"


export const store = configureStore({
    reducer: {
        name: nameSlice,
        tickets: ticketSlice,
        Users: userSlice,
    }
})