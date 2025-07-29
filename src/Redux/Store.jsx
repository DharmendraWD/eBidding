import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import productReducer from "./ProductSlice";
import authReducer from './auth/authSlice'
import profileReducer from "./profile/ProfileSlice";
import popupReducer from './PopupSlice/PopupSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        product: productReducer,
        profile: profileReducer,
        popup: popupReducer
    }
})

export default store
