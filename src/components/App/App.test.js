import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';


describe('App', () => {
  let wrapper; 

  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);
  
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  });

})
