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