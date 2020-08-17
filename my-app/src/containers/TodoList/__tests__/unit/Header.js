import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() }); // Enzyme 使用adapter配置

import { shallow } from "enzyme";
import React from "react";
import { findTestWrapper } from "../../../../../src/utils/testUtils";
import Header from "../../components/Header";

// 首先考虑Header组件要包含的内容
// header 组件里需要input框

describe('Header组件', () => {
  it("渲染样式正常", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it("组件包含一个输入框", () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, "input");
    expect(inputElem.length).toBe(1);
  });
  
  it("输入框内容初始化为空", () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, "input");
    expect(inputElem.prop("value")).toEqual("");
  });
  
  it("输入框内容随输入会发生变化", () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, "input");
    const userInput = "今天要学习jest";
    inputElem.simulate("change", {
      target: { value: userInput },
    });
    expect(wrapper.state("value")).toEqual(userInput);
  });
  
  // 以下两个测试用例是成对的
  it("输入框无内容时触发回车事件无反应", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />); // 未来的数据会存放在todoList中，所以设计上会调用在headr里的方法控制todolist里的数据
    const inputElem = findTestWrapper(wrapper, "input");
    wrapper.setState({ value: "" });
    inputElem.simulate("keyUp", {
      keyCode: 13,
    });
    expect(fn).not.toHaveBeenCalled();
  });
  
  // TODO 测试方法报错
  it("如果输入框有内容时函数应该被调用, 内容清空", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = findTestWrapper(wrapper, "input");
    const useInput = "学习 React";
    wrapper.setState({ value: useInput });
    inputElem.simulate("keyUp", {
      keyCode: 13,
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith(useInput);
    const newInputElem = findTestWrapper(wrapper, 'input');
    expect(newInputElem.prop('value')).toBe('');
  });
});

// 当组件不会频繁发生内容的改变的时候可以采用快照


