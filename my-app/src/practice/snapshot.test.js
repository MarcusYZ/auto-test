import { generateConfig } from "./snapshot";

test(" generateConfig 函数", () => {
  // expect(generateConfig()).toEqual({
  //   server: 'http://localhost',
  //   post: 8080
  // })

  // toMatchSnapshot 判断快照

  // 加上Inline会把快照生成到里面
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date), // 如果是随机的数据，用这中方式可以提前声明 time是任意类型的Date
      // 不仅仅是Date也可以是number 或者是其他的。
    },
    `
    Object {
      "post": 808012,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

// 如果要测试一段配置内容，我们可以采用快照。
// 第一次执行的时候会把它的快照放到snapshots文件里，
// 如果再次执行生成的快照和第一次执行产生的快照一致的时候就可以通过
// 如果更新了之后 确实想要更新 就可以按u来更新快照

// 如果有两个快照，我不想一次性全部都更新 我可以用i 它会交互式得更新
