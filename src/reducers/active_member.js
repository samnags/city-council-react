export default function(state = null, action) {
    switch (action.type) {
        case 'MEMBER_SELECTED':             
            return action.payload
        default:
            return state
    }
}