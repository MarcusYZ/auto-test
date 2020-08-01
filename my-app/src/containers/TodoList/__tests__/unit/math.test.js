const math = require('../../../../../knowledge/math.js');
const {add} = math;
test('测试 3 +7', () => {
  expect(add(3, 7)).toBe(10)
})

// 单元测试，集成测试

// 单元测试就是测试一个模块， 集成测试就是多个模块测试

// 如果要使用jest就一定要引入模块的概念