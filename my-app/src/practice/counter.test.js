import Counter from './counter'

// const counter = new Counter(); 
// 相同的准备，用beforeAll() 中去做
let counter = null
// 统一的准备用 beforeAll
beforeAll(() => { 
  counter = new Counter;
  // 这是一个个钩子函数
}) 

// 统一的处理用AfterAll（）
afterAll(() => {
  console.log('AfterAll')
})

// 在每一个测试用例之前都会执行一次
beforeEach(() => {
  console.log('beforeEach')
})

afterEach(()=> {
  
})
describe('测试增加方法的方法', () => {
  it('测试 addOne()', () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  })
})

describe('测试减少相关的的方法', () => {
  it('测试 minus()', () => {
    counter.minusOne();
    expect(counter.number).toBe(0);
  })
}); 

