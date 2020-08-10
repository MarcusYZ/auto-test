import React from 'react'
import { mount } from 'enzyme'
import Todolist from '../../index';
import { findTestWrapper } from '../../../../utils/testUtils';
it(`
    1、 Header输入框输入内容
    2、 点击回撤
    3、 列表中展示用户输入的内容项
`, ()=> {
  const wrapper = mount(<Todolist />);
  console.log(wrapper);
})