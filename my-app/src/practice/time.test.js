import  timer from './timer';

jest.useFakeTimers(); // 告诉测试如果后面出现了 setTimeout /  setInterval 这样的方法都可以直接跳过

test('timer 测试', () => {
  // timer是一个异步函数，它会直接执行掉，整个测试并不管你的回调函数
  const fn = jest.fn();
  timer(fn);
  // jest.runAllTimers(); // 我可以让timers马上执行 上面 useFakeTimers 和 runAllTimers 是配合使用的
  // jest.runOnlyPendingTimers(); // 只会运行处于队列中的timers ，如果是不在的就没法运行
  jest.advanceTimersByTime(3000) // 让时间快进3秒
  expect(fn).toHaveBeenCalledTimes(1);
})