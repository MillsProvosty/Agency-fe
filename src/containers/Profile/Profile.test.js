import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps, mapDispatchToProps } from './Profile';
import { setAllOpportunities } from '../../actions'

describe('Profile', () => {
  let wrapper;


  const mockUser = {
    role: 'client',
    first_name: 'Bob',
    id: 1
  }

  const mockOpp = [{
    "title": "aint no thang but a chicken wang",
    "type": "gangsta",
    "location": "atlanta ga",
    "estimated_time": "1",
    "description": "357 to yo forehead" 
  }]

  const mockSetOpp = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Profile 
        user={mockUser}
        opportunities={mockOpp}
        setOpportunities={mockSetOpp}
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps',() => {
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
    it("calls setOpportnities with an setAllOpportunities action when setOpportunities is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setAllOpportunities(mockOpp);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setOpportunities(mockOpp);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
