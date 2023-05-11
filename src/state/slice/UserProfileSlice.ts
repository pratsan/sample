import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const userLoggingSlice={
    "isLoggedIn":false
}
const UserProfileSlice=createSlice({
    initialState:userLoggingSlice,
    name:"user",
    reducers:{
        updateUserState(state,action:PayloadAction<boolean>){
             state.isLoggedIn=action.payload;
        }
    }
});

export const {updateUserState} =UserProfileSlice.actions;
export default UserProfileSlice.reducer;