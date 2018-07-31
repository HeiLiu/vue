// 响应式
// 'use strict';
function observe(value) {
    // value严格性检查
    if (!value || typeof value !== "object") return

    console.log(Object.keys(value));
    Object.keys(value).forEach(key => {
        // console.log(key);

        defineReactive(value, key, value[key])
    })
    // Object.defineProperty
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true, // 可遍历的
        configurable: true, 
        get: function reactiveGetter () {
            return val;
        },
        set: function reactiveSetter(newVal) {
            if(obj[key] == newVal)return 
            val = newVal
            cb(newVal);
            // console.log('121~121~');
        }
    })
}
function cb(val){
    console.log('得到新的值：'+ val);
}
// 数据 _data 里的每个 key: value, 都需要被define

class Vue {
    constructor(options) {
        this._data = options.data;
        observe(this._data);
    }
}

// 发布订阅者模式是Vue 数据响应的核心
// 一对多的关系
let vm = new Vue({
    data: {
        test: 'Testing',
        name: 'Bill Gates'
    }
});

vm._data.test = 'Hello';
// 拒绝重复、无效的修改
vm._data.test = 'Hello';