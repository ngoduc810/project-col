import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'items',
    
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            if (state.findIndex(e => e.id === action.payload.id) === -1) {
                            return [...state, {
                            ...action.payload, 
                             qty: 1
            }]
            }
            else {
                return (state.map(e => e.id === action.payload.id ? {...e, qty: e.qty + 1} : e))
            }
        },
        deleteCart: (state, action) => {
            state.splice(action.payload, 1)
        },
        minusCart: (state, action) => {
            return state.map(e => e.id === action.payload.id ? {...e, qty: e.qty - 1} : e)
        }
    }
})

const {reducer, actions} = cart;
export const  { addCart, deleteCart, increCart, minusCart } = actions;
export default reducer;