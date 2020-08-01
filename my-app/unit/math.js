function add (a, b) {
  return a + b;
}

// 加了模块化语句后，就没办法在浏览器上运行了，
// 可以添加一个try catch
try {
  module.exports = {
    add, 
  }
} catch(e) {
  console.log(e)
}


