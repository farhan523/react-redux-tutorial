import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCakes } from '../redux'

function HooksCakeContainer() {

    let [num, setNum] = useState(1)
    let numOfCakes = useSelector((state) => { return state.numOfCakes })
    let dispatch = useDispatch()

    return (
        <div>
            <h2>number of cakes {numOfCakes}</h2>
            <button onClick={() => { dispatch({ type: 'BUY_CAKE', amount: num }) }}>buy cake</button>
            <input type='number' onChange={(e) => { setNum(e.target.value) }}></input>
        </div>
    )
}

export default HooksCakeContainer
