export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER' :
      return action.user
    default: 
      return state
  }
}

export const roleReducer = (state = '', action ) => {
  console.log(action)
  switch (action.type) {
    case 'SET_ROLE' :
      return action.role
    default: 
      return state
  }
}