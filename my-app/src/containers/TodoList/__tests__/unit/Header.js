import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import Header from '../../components/Header'

Enzyme.configure({ adapter: new Adapter() });
  // 首先考虑Header组件要包含的内容
  // header 组件里需要input框

it('Header 组件包含一个 input 框', () => {
  const wrapper = shallow(<Header />)
  const inputElem = wrapper.find("[data-test='input']");
  expect (inputElem.length).toBe(1);
})

it('Header 组件初始化为空', () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find("[data-test='input']");
  expect(inputElem.prop('value')).toEqual('');
})

it('Header 组件 input框内容 ，当用户输入时会跟随变化', () => {
  const wrapper = shallow (<Header />);
  const inputElem = wrapper.find("[data-test='input']");
  const userInput = '今天要学习jest';
  inputElem.simulate('change', {
    target: {value: userInput }
  })
  expect(wrapper.state('value')).toEqual(userInput) 
})