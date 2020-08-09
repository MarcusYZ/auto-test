import { createObject, runCallback } from './demo';

test('测试 runCallBack 是否被执行了', () => {
  const func = jest.fn(()=> {
    console.log(1)
    return '456' // jest会基于自己内部的函数生成一个函数
  }) // 使用jest模拟了函数
  func.mockReturnValueOnce('Dell'); // mockReturnValueOnce模拟返回值，如果没有Once会全部执行
  func.mockReturnValueOnce('施正阳');
  runCallback(func);
  runCallback(func);
  expect(func).toBeCalled(); 
  expect(func.mock.calls.length).toBe(2);
  expect(func.mock.results[0].type).toBe('return')
  // expect(runCallBack(func)).toBe('hello')
  console.log(func.mock) // 如果是被jest模拟的函数 会有一个Mock属性，展示一些调用情况
  
})

// calls 返回值中
// invocationCallOrder 指的是执行的顺序
// calls 传递的参数
// results 表示每次执行的返回值

test.only('createObject() ', ()=> {
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