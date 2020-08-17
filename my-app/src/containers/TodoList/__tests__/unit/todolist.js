import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() }); // Enzyme 使用adapter配置

import React from 'react'
import Todolist from '../../index'
import { findTestWrapper } from '../../../../utils/testUtils'; 
import { shallow } from 'enzyme';
import TodoList from "../../index";

describe('Todolist组件', () => {
  it( '初始化列表为空', () => {
    const wrapper = shallow(<Todolist />);
    expect(wrapper.state('undoList')).toEqual([]);
  })
  
  it ('Header组件存在addUndoItem属性', () => {
    const wrapper = shallow(<Todolist />)
    const Header = wrapper.find('Header');
    expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)// 表示wrappper 实例上的一个方法 addUndoItem
  }) 
  
  // 当写单元测试的时候，尽可能让todolist和 header完全解耦，能在自己组件完成的就在组件里完成
  it('addUndoItem方法被调用时 undoList 数据项增加', () => {
    const wrapper = shallow(<TodoList />);
    const { addUndoItem } = wrapper.instance();
    const content = '学习 React'
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toBe(content);
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(2);
  });
   
  it ('Undolist 应该接受 list 和 deleteItem 两个参数', () => {
    const wrapper = shallow(<TodoList /> )
    const UndoList = wrapper.find('UndoList');
    expect(UndoList.prop('list')).toBeTruthy(); // 表示wrappper 实例上的一个方法 addUndoItem
    expect(UndoList.prop('deleteItem')).toBeTruthy(); 
  }) 
  
  it('deleteItem方法被调用，undoList 应该删除数据', () => {
    const wrapper = shallow(<TodoList />);
    const data = ['学习 Jest' , 'dell', 'lee']
    wrapper.setState({
      undoList: data
    })
    wrapper.instance().deleteItem(1);
    expect(wrapper.state('undoList')).toEqual(data);
  });
})
