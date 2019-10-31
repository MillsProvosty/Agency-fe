import React from 'react';
import { shallow } from 'enzyme';
import { SignInForm, mapDispatchToProps } from './SignInForm';
import { setUser } from '../../actions';

describe('SignInForm', () => {
  let wrapper;

  const mockUser = {
    id: 1,
    role: 'client',
    name: 'wang'
  }
  const mockSetUser = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <SignInForm 
        setAUser={mockSetUser}
      />
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('button should be disabled onclick', () => {
    wrapper.find('#sign-in').props().onClick();
    expect(mockSetUser).not.toHaveBeenCalled();
  })

  // it('should call setUser', () => {

  // })
  describe('mapDispatchToProps', () => {
    it("calls setAUser with an setUser action when setAUser is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setUser(mockUser);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setAUser(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})