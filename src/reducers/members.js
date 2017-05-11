export default function(state = [], action) {
    switch (action.type) {
    case 'FETCH_MEMBERS': 
        return action.payload
    default: 
        return state
    }
}

