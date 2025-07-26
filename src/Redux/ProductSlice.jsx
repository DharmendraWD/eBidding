import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze(
    {
IDLE:"idle",
Loading:"loading",
ERROR:"error",
SUCCESS:"success"
    }
)

const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUS.IDLE
    },
    reducers:{
        setproducts(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
    
})

export const {setproducts, setStatus} = productSlice.actions
export default productSlice.reducer

// middle ware 
export function fetchproducts(){
    return async function fetchproductThunk(dispatch,getState){
        dispatch(setStatus(STATUS.Loading))
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            dispatch(setproducts(data))
            dispatch(setStatus(STATUS.SUCCESS))
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}