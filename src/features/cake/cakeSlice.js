import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {ordered as iceCreamOrder} from '../icecream/iceCreamSlice'

const initialState = {
    numOfCake: 10
}


const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers:{
        ordered: (state) => {
            state.numOfCake--
        },
        restocked: (state,action) => {
            state.numOfCake += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(iceCreamOrder, state => {
            state.numOfCake --
        })
    }
})

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions




