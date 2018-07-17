class Vue {
  constructor (options) {
    this.data = options.data
    Object.keys(this.data).forEach((key) => {
      this.proxyKeys(key)
      console.log(key)
    })
    // 创建一个发布者 数据不止用于一个地方
    //  让 data 成为一个发布者 可以使用在模板里面 在指令里面 事件里面
    //  发布-订阅者 形成发布订阅关系 1对n的关系
    observe(this.data)
    // 模板里面编译的过程， 建立起来订阅发布的关系
    new Compile(options.el, this)
    options.mounted.call(this)  // 保持this的指向
  }
  proxyKeys (key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter() {
        return this.data[key]
      },
      set: function setter (newVal) {
        this.data[key] = newVal
      }
    })
  }
}

