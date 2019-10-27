import { roleReducer, userReducer, opportunityReducer } from './userReducer'
import { combineReducers } from 'redux'
export const rootReducer = combineReducers({
  role: roleReducer,
  user: userReducer,
  opportunities: opportunityReducer
})