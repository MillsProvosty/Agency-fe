import React from 'react';
import { shallow } from 'enzyme';
import { Opportunities, mapStateToProps } from './Opportunities'
import { deleteAnOpportunity } from '../../util/apiCalls';

jest.mock('../../util/apiCalls');

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

  const mockUser = {
    id: 1,
    name: 'Joe mama'
  }
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);
  
  beforeEach(() => {
    wrapper = shallow(
      <Opportunities 
        opportunities={mockOpp}
        role="client"
        user={mockUser}
      />
    )
  })

  beforeAll(() => {
    deleteAnOpportunity.mockImplementation(mockUser.id, mockOpp.id)
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
   wrapper.find('#showModal').props().onClick()
   expect(setState).toHaveBeenCalled()
 }) 

 it.skip('should call deleteAnOpportunity if ids are good', async () => {
  await wrapper.find('#deleteOpp').props().onClick()
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
})