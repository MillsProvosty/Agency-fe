import { roleReducer, userReducer } from './userReducer'
import { opportunityReducer } from './opportunityReducer' 
import { errorReducer } from './errorReducer' 
import { userOppsReducer } from './userOppsReducer' 
import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
  role: roleReducer,
  user: userReducer,
  opportunities: opportunityReducer,
  error: errorReducer,
  userOpps: userOppsReducer
})