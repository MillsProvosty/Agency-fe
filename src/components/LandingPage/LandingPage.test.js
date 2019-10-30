import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage, mapDispatchToProps } from './LandingPage';
import { setRole } from '../../actions'

describe('LandingPage', () => {
  let wrapper;

  const mockSetRole = jest.fn()
  const mockDisplayForms = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <LandingPage 
        setRole={mockSetRole}
        displayForms={mockDisplayForms}
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call displayForms on click of volunteer', () => {
    wrapper.find('#volunteer').props().onClick();
    expect(mockDisplayForms).toHaveBeenCalled()
  })

  it('should call displayForms on click of client', () => {
    wrapper.find('#client').props().onClick();
    expect(mockDisplayForms).toHaveBeenCalled()
  })

  it('should set role to client on click', () => {
    wrapper.find('#client').props().onClick();
    expect(mockSetRole).toHaveBeenCalled()
  })
  
  it('should set role to volunteer on click', () => {
    wrapper.find('#volunteer').props().onClick();
    expect(mockSetRole).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it("calls setRole with an setROle action when setRole is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setRole('client');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setRole('client');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
})