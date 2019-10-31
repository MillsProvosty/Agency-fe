import React from 'react';
import { shallow } from 'enzyme';
import { CreateOppModal, mapDispatchToProps, mapStateToProps } from './CreateOppModal';
import { setUserOpportunities, addUserOpp} from '../../actions'

describe('CreateOppModal', () => {
let wrapper;

const mockUser = {
  id: 1,
  name: 'chicken'
}
const mockAddOpp = jest.fn()

const mockOpp = {
  "title": "aint no thang but a chicken wang",
  "type": "gangsta",
  "location": "atlanta ga",
  "estimated_time": "1",
  "description": "357 to yo forehead" 
}
beforeEach(() => {
  wrapper = shallow(
    <CreateOppModal
      user={mockUser}
      addOpp={mockAddOpp}
    />
  )
})
  it('should match snapshot', () => {
    expect('wrapper').toMatchSnapshot(); 
  });

  it('should call addOpp when a button is clicked', () => {
    wrapper.find('#create-opp').props().onClick();
    
    expect(mockAddOpp).not.toHaveBeenCalled()
  })
  describe('mapStateToProps', () => {
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
    it("calls addOpp with an setUserOpportunities action when addOpp is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setUserOpportunities(mockOpp);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setAllOpps(mockOpp);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("calls addOpp with an setUserOpportunities action when addOpp is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addUserOpp(mockOpp);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addOpp(mockOpp);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
})