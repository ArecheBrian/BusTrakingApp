import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "../Features/testSlice";
import userSlice from "../Features/UserSlice";
import driverSlice from "../Features/DriverSlice";
import routeSlice from "../Features/RouteSlice";
import ticketSlice from "../Features/TicketSlice"


export const store = configureStore({
    reducer: {
        name: nameSlice,
        tickets: ticketSlice,
        Users: userSlice,
    }
})