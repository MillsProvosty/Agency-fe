export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER' :
      return action.user
    default: 
      return state
  }
}

export const opportunityReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_USER_OPPORTUNITIES':
      return [...state, action.opportunities]
    default: 
      return state
  }
}

export const roleReducer = (state = '', action ) => {
  switch (action.type) {
    case 'SET_ROLE' :
      return action.role
    default: 
      return state
  }
}