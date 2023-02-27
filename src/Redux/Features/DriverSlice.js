import { createSlice } from "@reduxjs/toolkit";

const driverSlice = createSlice ({
    name: "Drivers",
    initialState: {
        identificationCard: "",
        driversLicense: "",
        fullName: "",
        dateofBirth: "",
        email: "",
        password: "",


    },
    reducers: {},
});

export default driverSlice.reducer;