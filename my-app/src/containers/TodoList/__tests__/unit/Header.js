import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() }); // Enzyme 使用adapter配置

import { shallow } from 'enzyme';
import React from 'react'
import { findTestWrapper } from '../../../../../src/utils/testUtils'; 
import Header from '../../components/Header'

  // 首先考虑Header组件要包含的内容
  // header 组件里需要input框
it('Header 组件包含一个 input 框', () => {
  const wrapper = shallow(<Header />)
  const inputElem = findTestWrapper(wrapper, 'input')
  expect (inputElem.length).toBe(1);
})

it('Header 组件初始化为空', () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, 'input')
  expect(inputElem.prop('value')).toEqual('');
})

it('Header 组件 input框内容 ，当用户输入时会跟随变化', () => {
  const wrapper = shallow (<Header />);
  const inputElem = findTestWrapper(wrapper, 'input')
  const userInput = '今天要学习jest';
  inputElem.simulate('change', {
    target: {value: userInput }
  })
  expect(wrapper.state('value')).toEqual(userInput) 
})

it('Header 组件 input 输入框 回撤后，如果input无内容, 无操作', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, 'input')
  const value = '';
  wrapper.setState({value: ''});
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
})