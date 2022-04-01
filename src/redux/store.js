import { configureStore } from "@reduxjs/toolkit";
import reducer from "./cartSlice";
import userReducer from './userSlice';

const rootReducer = {
    items: reducer,
    user: userReducer
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;