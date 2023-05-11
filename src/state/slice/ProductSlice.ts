
import {createSlice} from "@reduxjs/toolkit";
import {Product} from "../../model/Product";
import {BannerModel} from "../../model/SideBarModel";

interface productState{
    productList:Product[];
    bannerList:BannerModel[];
    isError:boolean
}
const initialProductState:productState={
    productList:[],
    isError:false,
    bannerList:[]
}

const ProductSlice=createSlice({
    initialState:initialProductState,
    name:"product",
    reducers:{
        getAllProduct (state,action) {
if(state.productList.length<=0)
state.productList.push(...action.payload);
        },
        getBannerList(state,action) {
            if(state.bannerList.length<=0)
            state.bannerList.push(...action.payload);
        }
    }
});
export const {getAllProduct,getBannerList} =ProductSlice.actions;
export default ProductSlice.reducer;