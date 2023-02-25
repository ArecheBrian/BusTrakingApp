import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "Users",
    initialState:{
        fullName: "Enmanuelle Martinez",
        dateofBirth: "",
        email: "",
        password: "",

    },
    reducers: {},
});

export default userSlice.reducer;