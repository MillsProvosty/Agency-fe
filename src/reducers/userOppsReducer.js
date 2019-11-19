export const userOppsReducer = (state = [], action) => {
    switch(action.type) {
      case 'SET_ALL_OPPORTUNITIES_USER':
        return action.opportunities
      default: 
        return state
    }
  }