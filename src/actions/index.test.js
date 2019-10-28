import { setRole, setUser } from './index'

describe('Actions', () => {
it('should have a type of SET_ROLE', () => {
    let role = "client"

    let expectedAction = {
      type: 'SET_ROLE',
      role
    }

    expect(setRole(role)).toEqual(expectedAction);
  });

  it('should have a type of SET_USER', () => {
    let user = {
        firstName: 'Greg',
        lastName: 'Anderson',
        email: 'ntbgfd@trv.com',
        password: 'jhgfd',
        confirmation: 'jhgfd'
    }

    let expectedAction = {
      type: 'SET_USER',
      user
    }

    expect(setUser(user)).toEqual(expectedAction);
  });

})