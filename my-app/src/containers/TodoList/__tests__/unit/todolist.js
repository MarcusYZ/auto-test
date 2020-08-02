import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() }); // Enzyme 使用adapter配置

import React from 'react'
import Todolist from '../../index'
import { findTestWrapper } from '../../../../utils/testUtils'; 
import { shallow } from 'enzyme';

it( 'Todolist 初始化列表为空', () => {
  const wrapper = shallow(<Todolist />);
  expect(wrapper.state('undoList')).toEqual([]);
})

it ('Todolist 应该给 Header 传递一个增加 undoList 内容的方法', () => {
  const wrapper = shallow(<Todolist />)
  const Header = wrapper.find('Header');
  expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)// 表示wrappper 实例上的一个方法 addUndoItem
}) 

// 当写单元测试的时候，尽可能让todolist和 header完全解耦，能在自己组件完成的就在组件里完成
it ('当Header回车之时， todoList 应该新增内容', () => {
  const wrapper = shallow(<Todolist />)
  const Header = wrapper.find('Header');
  const addFunc = Header.prop('addUndoItem');
  addFunc('学习React')
  expect(wrapper.state('undoList').length).toBe(1);
  expect(wrapper.state('undoList')[0]).toBe('学习React') 
}) 
 