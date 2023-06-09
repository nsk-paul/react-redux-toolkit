import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
//this is the testing for git push
//second testing

//third testing

export const CakeView = () => {
    const numOfCakes = useSelector((state)=>state.cake.numOfCake)

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
        </div>
    )
}
