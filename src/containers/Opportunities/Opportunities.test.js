import React from 'react';
import { shallow } from 'enzyme';
import { Opportunities, mapStateToProps } from './Opportunities'

describe('Opportunities', () => {
  let wrapper;
  
  const mockOpp = [
    {
      "description": "I cannot rake my yard- I need someone to come in and get the front and back yard.",
      "estimated_time": "1 hr",
      "id": 2,
      "location": "2848 Roslyn St., Denver CO 80238",
      "title": "Rake Leaves",
      "type": "Physical Labor",
      "user_id": 1
    }
  ];
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(
      <Opportunities 
        opportunities={mockOpp}
        role="client"
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render a different button if role is different', () => {
   const wrapper = shallow(
      <Opportunities 
        opportunities={mockOpp}
        role="volunteer"
      />
   )
   expect(wrapper).toMatchSnapshot()
  })

 it('should call showCreateModal when clicked', () => {
   wrapper.find('button').props().onClick()
   expect(setState).toHaveBeenCalled()
 }) 

  describe('mapStateToProps', () => {
    it('should return an array of opportunities', () => {
      let mockState = {
        user: {
          id: 1,
          name: 'something'
        },
        opportunities: mockOpp,
        role: 'client'
      }
      let expected = {opportunities: mockOpp}
  
      let mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(expected)
    })
  })
})