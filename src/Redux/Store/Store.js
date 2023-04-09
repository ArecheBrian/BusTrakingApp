import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "../Features/testSlice";
import userSlice from "../Features/UserSlice";
import ticketSlice from "../Features/TicketSlice"
import StopsSlice from "../Features/StopsSlice";
import LocationSlice from "../Features/LocationSlice";
import SearchSlice from "../Features/SearchSlice";


export const store = configureStore({
    reducer: {
        name: nameSlice,
        tickets: ticketSlice,
        Users: userSlice,
        stops: StopsSlice,
        location: LocationSlice,
        Search: SearchSlice
    }
})