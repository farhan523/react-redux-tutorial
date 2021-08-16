const initialState = {
    loading: false,
    data: [],
    error: ''
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Fetch_User_Data':
            return {
                ...state,
                loading: true,
            }
        case 'Fetch_User_Success':
            return {
                loading: false,
                data: action.data,
                error: ''
            }
        case 'Fetch_User_Failure':
            return {
                loading: false,
                data: [],
                error: action.error
            }
        default:
            return state
    }
}

export default reducer