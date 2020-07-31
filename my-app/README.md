## React test

# 什么是测试驱动开发

一、 TDD开发流程

1. 先编写测试用例
2. 运行测试，测试用例无法通过测试
3. 编写代码，使测试用例通过测试
4. 优化代码，完成开发
5. 重复上述流程

二、 TDD的优势

1. 长期减少回归bug
2. TDD 开发代码质量会更高
3. 测试覆盖率高
过高的测试覆盖率会消耗非常高的精力，我们要找到一个平衡点。
4. 错误测试代码不容易出现


# 配置环境

1. npx create-react-app my-app
2. npm eject 弹射 隐藏配置文件

想要配置jest 需要有npm管理 然后安装

3. 安装 enzyme 
npm i enzyme
npm i --save-dev enzyme enzyme-adapter-react-16


# TDD 开发方式


<!-- // import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import React from 'react'
// import App from './App';

// Enzyme.configure({ adapter: new Adapter() });
// test('renders learn react link', () => {
//     // 通过这种方式我们可以对dom进行一个测试
//     // react-dom-render提供了一些包装 从而让我们可以更灵活得进行测试
//     // const div = document.createElement('div');
//     // ReactDOM.render(<App />, div);
//     // const container = div.getElementsByClassName('App');
//     // expect(container.length).toBe(2); 
//     const wrapper = shallow(<App />)  // 相对于shallow 有一个mount 是全渲染。 当app组件有子组件时会全部渲染。
//     expect(wrapper).toMatchSnapshot(); // 生成快照  当页面非常重要不能改的时候就可以用这个，一旦更改就通不过测试 如果真的需要改就 按u 更新快照
//     // shallow会把app组件完整渲染，内部的渲染只用标签代替。
//     // 因为它只关注当前组件，所以渲染速度会非常快。 当我们做单元测试的时候，就可以用这种浅渲染。
//     // expect(wrapper.find('[data-test="container"]').length).toBe(1);  
//     // console.log(wrapper.debug()) // 调试，可以展示代码
//     // expect(wrapper.find('[data-test="container"]').prop('title')).toBe('dell lee');
//     // expect(wrapper.find('[data-test="container"]')).toExist();
//     // expect(wrapper.find('[data-test="container"]')).toHaveProp('title', 'dell lee'); // 判断属性 和属性值 
//   }); -->
