export const setRole = role => ({
  type: 'SET_ROLE',
  role
});

export const setUser = (user, role) => ({
  type: 'SET_USER',
  user,
  role
});

export const setUserOpportunities = opportunities => ({
  type: 'SET_USER_OPPORTUNITIES',
  opportunities
});

export const addOpp = opp => ({
  type: 'ADD_OPP',
  opp
});

export const editOpp = opp => ({
  type: 'EDIT_OPP',
  opp
});
