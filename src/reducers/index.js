import { roleReducer, userReducer } from './userReducer'
import { combineReducers } from 'redux'
export const rootReducer = combineReducers({
  role: roleReducer,
  user: userReducer
})