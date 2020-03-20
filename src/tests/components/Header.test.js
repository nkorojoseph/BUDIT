import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header handleLogout={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
});


test('should call startLogout on button click', () => {
  const handleLogout = jest.fn()
  const wrapper = shallow(<Header handleLogout={handleLogout}/>)
  wrapper.find('button').simulate('click')
  expect(handleLogout).toHaveBeenCalled()
  
})
