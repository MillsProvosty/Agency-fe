export const opportunityReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_USER_OPPORTUNITIES':
      return action.opportunities
    case 'EDIT_OPP':
      const opp = state.map(opp => {
        if(opp.id === action.opp.id) {
         return action.opp
        }
      })

    default: 
      return state
  }
}