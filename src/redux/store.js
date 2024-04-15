import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice"; // Correct import path

const store = configureStore({
  reducer: {
    user: userReducer, // Correct reducer reference
  },
});

export default store;
