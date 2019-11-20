export const setRole = role => ({
  type: 'SET_ROLE',
  role
});

export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setAllOpportunities = opportunities => ({
  type: 'SET_ALL_OPPORTUNITIES',
  opportunities
});

export const setAllOpportunitiesForSpecificUser = opportunities => ({
  type: 'SET_ALL_OPPORTUNITIES_USER',
  opportunities
});

export const addUserOpp = opp => ({
  type: 'ADD_OPP',
  opp
});

export const editOpp = opp => ({
  type: 'EDIT_OPP',
  opp
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
})
