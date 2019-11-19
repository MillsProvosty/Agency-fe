import React from 'react';
import { shallow } from 'enzyme'
import { Schedule, mapDispatchToProps, mapStateToProps } from './Schedule';
import { setAllOpportunities } from '../../actions'

describe('Schedule', () => {
  let wrapper;


  const mockSetOpp = jest.fn();

  const mockUser = {
    id: 1,
    name: 'wang',
    role: 'client'
  }

  const mockOpp = [{
    "title": "aint no thang but a chicken wang",
    "type": "gangsta",
    "location": "atlanta ga",
    "estimated_time": "1",
    "description": "357 to yo forehead" 
  }]

  beforeEach(() => {
    wrapper = shallow(
      <Schedule
        user={mockUser}
        opportunities={mockOpp}
        setOpportunities={mockSetOpp}
      />
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot when a user is a volunteer', () => {
    const newUser = { id: 1, name: 'chicken',  role: 'volunteer'}
    const wrapper = shallow(
      <Schedule 
        user={newUser}
        opportunities={mockOpp}
        setOpportunities={mockSetOpp}
      />
    )
    expect(wrapper).toMatchSnapshot()
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
      let expected = mockOpp
  
      let mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps.opportunities).toEqual(expected)
    })

    it('should return a user', () => {
      let mockState = {
        user: {
          id: 1,
          name: 'something'
        },
        opportunities: mockOpp,
        role: 'client'
      }
      let expected = mockState.user
      let mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps.user).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it("calls setAllOpportunities with an setAllOpps action when setAllOpportunities is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setAllOpportunities(mockOpp);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setAllOpps(mockOpp);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})