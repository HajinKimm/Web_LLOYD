import {createSlice} from '@reduxjs/toolkit'
import products from '../../assets/api/products.json'

const initialState={
    originalData : products,
    cartData:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

    }
})

export const {} = cartSlice.actions
export default cartSlice.reducer