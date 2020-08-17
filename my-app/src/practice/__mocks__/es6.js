const Util = jest.fn(
  () => { console.log(a, "a")}
)
Util.prototype.a = fn()
Util.prototype.b = fn();