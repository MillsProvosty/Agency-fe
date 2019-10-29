import React from 'react';
import { shallow } from 'enzyme';
import { SignUpModal } from './SignUpModal';

describe('SignUpModal', () => {
  let wrapper; 
  
  const mockSetUser = jest.fn()
  const mockSetOpps = jest.fn()

  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(
      <SignUpModal 
        role='client'
        setAUser={mockSetUser}
        setAllOpps={mockSetOpps}
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  }) 

  // it('should update state')
})
