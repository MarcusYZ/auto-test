import React from 'react';
import { shallow } from 'enzyme';
import UndoList from '../../components/UndoList'
import { findTestWrapper } from '../../../../utils/testUtils'; 

// it('Undolist渲染正常')
// 这个最好再写

it('未完成列表初始化 当数据为空数组时  count 数目为 0，列表无内容 ', () => {
  const wrapper = shallow(<UndoList list={[]} />);
  const countElem = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "list-item")
  expect(countElem.text()).toEqual("0");
  expect(listItems.length).toEqual(0)
})

it('未完成列表当数据有内容时 count 数目显示数据长度，列表不为空', () => {
  const listData = ['学习Jest', '学习TDD', "学习单元测试"]; // 模拟了数据
  const wrapper = shallow(<UndoList list={listData} />);
  const countElem = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "list-item")
  expect(countElem.text()).toEqual("3");
  expect(listItems.length).toEqual(3)
})

it('未完成列表里有数据的时候， 点击某个删除按钮，会调用删除方法', () => {
  const listData = ['学习Jest', '学习TDD', "学习单元测试"]; // 模拟了数据
  const fn = jest.fn() // 方法模拟 会调用一个方法，但这个方法是什么并不重要
  const index = 1;
  const wrapper = shallow(<UndoList deleteItem = {fn} list={listData} />);
  const deleteItems = findTestWrapper(wrapper, "delete-item");
  deleteItems.at(index).simulate('click') // 想找集合里的某一项要用 at来找
  expect(fn).toHaveBeenLastCalledWith(index); // 点击的时候会接受一个参数
  // 想清楚代码是怎么写的再考虑测试用例
})

