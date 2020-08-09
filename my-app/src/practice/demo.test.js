import Axios from 'axios';
import { createObject, getData, runCallback } from './demo';
jest.mock('axios') // 通过jest 对 axios做一个模拟

// 1、mock 函数可以用来捕获函数的调用和返回结果，以及this 和调用顺序
// 2、它可以让我们自由得设置返回结果
// 3、改变函数的内部实现 
test.only('测试 runCallBack 是否被执行了', () => {
  const func = jest.fn(()=> {
    console.log(1)
    return '456' // jest会基于自己内部的函数生成一个函数
  }) // 使用jest模拟了函数
  // func.mockReturnValueOnce('Dell'); // mockReturnValueOnce模拟返回值，如果没有Once会全部执行
  // func.mockReturnValueOnce('施正阳');

  // mockImplementation 模拟实现 函数的返回值 和 mockReturnValueOnce 区别是可以添加很多其他内容
  // func.mockImplementation(() => { 
  //   console.log(1)
  //   return '456' 
  // })

  // mockImplementationOnce 模拟实现一次
  // func.mockImplementationOnce(() => {
  //   console.log(1)
  //   return '456' 
  // })

  func.mockReturnThis();  // 模拟返回this
  runCallback(func);
  runCallback(func);
  expect(func).toBeCalled(); 
  expect(func.mock.calls.length).toBe(2);
  expect(func.mock.results[0].value).toBeUndefined(); //  断言为undefined
  expect(func.mock.calls[0]).toEqual(['abc'])  // 第一次调用的结果是abc
  expect(func).toBeCalledWith('abc'); // 每一次调用的时候结果都是abcn
  // expect(runCallBack(func)).toBe('hello')
  console.log(func.mock) // 如果是被jest模拟的函数 会有一个Mock属性，展示一些调用情况
  
})

// calls 返回值中
// invocationCallOrder 指的是执行的顺序
// calls 传递的参数
// results 表示每次执行的返回值

test('createObject() ', ()=> {
  const func = jest.fn();
  createObject(func)
  console.log(func.mock)
})

// 每次fn 使用的时候 this的指向
// {
//   calls: [ [] ],
//   instances: [ mockConstructor {} ],
//   invocationCallOrder: [ 1 ],
//   results: [ { type: 'return', value: undefined } ]
// }
// 一般来说，只要保证接口发送就可以了，至于接口返回什么内容是不会去考虑的

// 因为一个接口要响应3秒钟，那有1w个接口响应时间就太久了。

// 测试接口对不对是后端自动化测试的问题，而不需要前端去做
test('测试 getData', async () => {
  // 改变函数的内部实现 mockReturnValueOnce 模拟一次的返回结果
  axios.get.mockReturnValueOnce({data: 'hello'})
  await getData().then((data) => {
    expect(data).toBe('hello');
  })
})