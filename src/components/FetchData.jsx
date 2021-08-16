import React, { useEffect } from 'react'
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'



function FetchData() {

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()
    console.log(state)

    useEffect(() => {
        dispatch(fetchUsersData())
    }, [])

    return (
        <div>
            <h2>{state.loading ? 'loading' : state.data.map(item => item.id)}</h2>
        </div>
    )
}

export default FetchData

function fetchUsersData() {
    return function (dispatch) {
        dispatch({
            type: 'Fetch_User_Data',
        })
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const users = res.data
                dispatch({
                    type: 'Fetch_User_Success',
                    data: users
                })
            })
            .catch((err) => {
                const error = err.message
                dispatch({
                    type: 'Fetch_User_Failure',
                    error: error
                })
            })

    }
}