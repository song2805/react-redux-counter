let initialState = {
    count: 0,
}

function reducer(state = initialState, action) {


    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.num };
        case "LOGIN":
            return {
                ...state,
                id: action.payload.id,
                password: action.payload.password
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - action.payload.num
            }
        case "PLUS5":
            return {
                ...state,
                count: state.count + action.payload.num
            }
        case "PLUS10":
            return {
                ...state,
                count: state.count + action.payload.num
            }
        case "MINUS5":
            return {
                ...state,
                count: state.count - action.payload.num
            }
        case "MINUS10":
            return {
                ...state,
                count: state.count - action.payload.num
            }
            case "RESETBUTTON":
                return {
                    ...state,
                    count: state.count = action.payload.num
                }

        default: return { ...state };
    }

    // if(action.type=== "INCREMENT"){
    //     return {...state, count: state.count + 1}
    // } else if (action.type === "DECREMENT"){
    //     return {...state, count: state.count - 1}
    // }
    // return {...state}
}

export default reducer;