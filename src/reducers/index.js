import { combineReducers } from 'redux'
import memberReducer from './members'
import activeMember from './active_member'

const rootReducer = combineReducers({
    members: memberReducer,
    activeMember: activeMember
})

export default rootReducer


