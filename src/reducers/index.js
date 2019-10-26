import { roleReducer, userReducer } from './userReducer'

export const rootReducer = () => ({
  role: roleReducer,
  user: userReducer
})