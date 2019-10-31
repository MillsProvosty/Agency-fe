export const setRole = role => ({
  type: 'SET_ROLE',
  role
});

export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setOpps = (opps) => ({
  type: 'SET_ALL_OPPS',
  opps
})

export const setUserOpportunities = opportunities => ({
  type: 'SET_USER_OPPORTUNITIES',
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
