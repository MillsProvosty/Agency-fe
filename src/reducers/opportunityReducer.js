export const opportunityReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_ALL_OPPORTUNITIES':
      return [...action.opportunities]
    case 'ADD_OPP':
      return [...state, action.opp]
    case 'SET_ALL_OPPS':
      return action.opps
    default: 
      return state
  }
}