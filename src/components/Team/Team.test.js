import React from 'react';
import { shallow } from 'enzyme';
import Team from './Team';

describe('Team', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Team/>
    )
    expect(wrapper).toMatchSnapshot()
  }) 
})