import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "../slice/ProductSlice";
import UserProfileSlice from "../slice/UserProfileSlice";

const myState=configureStore({
    reducer:{
        product:ProductSlice,
        user:UserProfileSlice
    }
})

export default myState;
export type RootState=ReturnType<typeof myState.getState>
export type AppDispatch=typeof myState.dispatch