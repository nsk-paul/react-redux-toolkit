import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {ordered as cakeOrdered, restocked as cakeRestock} from '../cake/cakeSlice'


const initialState = {
    numOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: 'ice cream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream -= action.payload
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(cakeRestock, state => {
            state.numOfIceCream -- 
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions

