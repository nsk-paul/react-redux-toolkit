import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {ordered, restocked} from './iceCreamSlice'

export const IceCreamView = () => {

    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCream)

    //need to allow the use to input the number of restock
    const [value, setValue] = useState(1)

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of ice cream - {numOfIceCreams}</h2>
            <button onClick={()=>dispatch(ordered(1))}>Order ice cream</button>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={()=>dispatch(restocked(value))}>Restock ice cream</button>
        </div>
    )
}
