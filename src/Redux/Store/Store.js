import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/UserSlice";
import StopsSlice from "../Features/StopsSlice";
import LocationSlice from "../Features/LocationSlice";
import SearchSlice from "../Features/SearchSlice";
import RouteSlice from "../Features/RouteSlice";
import ProfileSlice from "../Features/ProfileSlice";
import DriverRouteSlice from "../Features/DriverRouteSlice";


export const store = configureStore({
    reducer: {
        Users: userSlice,
        stops: StopsSlice,
        location: LocationSlice,
        Search: SearchSlice,
        routes: RouteSlice,
        profile: ProfileSlice,
        driverR: DriverRouteSlice 
    }
})