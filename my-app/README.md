# React test

## Jest 
#### 一、 什么是一个好的前端自动化框架
考虑三个方面

1. 性能
2. 功能
3. 易用性

具体体现在 

1. 速度快 多个模块互相依赖，在第一次运行的时候都会运行，但是后续只会运行真的修改代码的文件
2. API简单  API数量少
3. 易配置 配置简单
4. 隔离性好 测试文件的环境都是隔离的
5. 监控模式
6. IDE 整合
7. Snapshot
8. 多项目并行 
9. 覆盖率 代码报告产生方便
10. Mock 丰富  模拟非常方便
11. 对于ts、node 等新特性使用得方便

#### 二、单元测试，集成测试

单元测试就是测试一个模块， 集成测试就是多个模块测试

如果要使用jest就一定要引入模块的概念

如果想要在浏览器中使用 module导出的模块可以用 try catch

#### 三、 jest配置

1. 使用  npx  jest --init 进行初始化 是测试一个node项目还是一个浏览器项目

2. --converage  生成测试图标

3. 安装 @babel/core @balel/preset-env 再做相关的配置

{
  "present": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}

4. babel-core 会取 .babelrc的配置 在运行测试前结果 babel吧代码做一次转化。然后运行转化过的测试用例代码

#### 四、 jest匹配器

1. toBe 值相同
2. toEqual 内容相同
3. toBeNull 是否为Null
4. toBeUndefined 
5. toBeDefine 是否定义
6. toBeTruthy 是否为真
7. toBeFalsy 是否为假
8. not 取反

数字相关匹配器
1. toBeGreaterThen() 大于
2. toBeLessThan() 小于
3. toBeGreaterThenEqual() 大于等于
4. toBeLessThanEqueal() 小于等于
5. toBeCloseTo()  正常js 算小数点是会有不准确的情况， 但是用 这种方式就可以通过

字符串相关匹配器
1. toMatch( 正则表达是) 匹配
2. toContain(字符串) 数组中包含 

异常情况匹配器
1. toThrow() 表示我希望它抛出异常
2. not.toThrow() 就不会抛出异常

#### 命令行工具

f 仅执行不同的
o 仅执行修改过的文件 并且o模式需要git对文件进行跟踪，跟踪的文件发生改变的时候会进行更新 当前文件的测试  --watch也是走o模式
a 任何测试用例发生了改变会执行全部测试用例
t 根据输入的模式 进行过滤， 只会测试包含模式的测试
p 同上， 不过筛选的是文件

 
#### 13-章节小结

后续看官网，再翻api

## 什么是测试驱动开发

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

三、 Snapshot 快照测试

## 配置环境

1. npx create-react-app my-app
2. npm eject 弹射 隐藏配置文件

想要配置jest 需要有npm管理 然后安装

3. 安装 enzyme 
npm i enzyme
npm i --save-dev enzyme enzyme-adapter-react-16


## React TDD 开发 

1. 测试驱动开发

2. 什么时候需要做前端自动化测试

对核心功能做前端自动化测试。在做大型项目的时候前端自动化测试很有必要


#### 5-16 小结 

TDD 优点是代码质量会提高

单元测试 测试覆盖率高 业务耦合度高 代码量大 过于独立
单元测试应用在独立的函数库比较合适

##  React BDD 开发

先写代码再写测试

#### 6-1 BDD概念与TDD概念的对比



