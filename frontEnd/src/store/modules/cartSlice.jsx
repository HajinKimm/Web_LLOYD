import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
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