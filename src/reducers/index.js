import { roleReducer, userReducer } from './userReducer'
import { opportunityReducer } from './opportunityReducer' 
import { combineReducers } from 'redux'
export const rootReducer = combineReducers({
  role: roleReducer,
  user: userReducer,
  opportunities: opportunityReducer
})