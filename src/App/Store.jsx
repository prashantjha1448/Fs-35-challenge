import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../State/AuthSclice"

export let Store = configureStore({
    reducer : {
        Auth : AuthReducer,

    }
})