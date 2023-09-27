import { configureStore } from '@reduxjs/toolkit'
import cartR from './modules/cartSlice';

export const store = configureStore({
    reducer: {
        cartR
    }
})
