# 七、ES6

## 7.1 定义变量

定义变量的关键字

- let 变量
- const 常量

### let/const 和 var 的区别

1. 预解析

- var 会进行预解析
- let 和 const 不会,必须要在定义后使用变量 2. 重复变量名
- var 可以定义重复变量名, 重复定义没有意义
- let 和 const 不能定义重复变量名 3. 块级作用域
- var 是没有块级作用域,只会被私有作用域限制使用范围(函数内)
- let/const 是可以被块级作用域显示使用范围
  - 块级作用域: 任何一个可以书写代码的{ } 就是块级作用域
- 注: let /const 定义变量的 {} 也称之为 `暂时性死区`

### let 和 const 的区别

1. 定义时候的赋值

   - let 定义变量的时候,可以不赋值
   - const 定义的时候,必须赋值

2. 值修改

   - let 定义的变量值可以修改
   - const 定义的变量不可以修改

### 循环绑定

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Leon</title>
  </head>
  <body>
    <button>索引为0</button> <br />
    <button>索引为1</button> <br />
    <button>索引为2</button> <br />
    <button>索引为3</button> <br />
    <button>索引为4</button> <br />
    <button>索引为5</button> <br />
  </body>
</html>
<script>
  var btns = document.querySelectorAll('button')
  // 给所有的button按钮点击事件,并要求在事件处理函数中获取点击按钮的索引
  // 通过for循环遍历btns 给每一个按钮点击事件
  for (var i = 0; i < btns.length; i++) {
    // 在for循环 中 i 就是按钮的索引
    // var i 在for循环的{} 中会进行预解析,变量提升到全局中
    btns[i].onclick = function () {
      // 当点击事件触发的时候,for循环已经执行结束,此时i的值为6
      // 所以点击的时候,处理函数执行 去到全局中才找到变量i值为6
      console.log(i) // 6
    }
  }
  for (let i = 0; i < btns.length; i++) {
    // 在for循环 中 i 就是按钮的索引
    // let i 在for循环的{} 会让{}变为块级作用域
    btns[i].onclick = function () {
      console.log(i)
    }
  }
</script>
```

## 7.3 箭头函数

ES6 中定义函数的一种方式,只能用来定义匿名函数表达式(匿名函数)

- var fn = function(){}
- var obj = {f:function(){}}
- setInterval(function(){},1000)
- 事件源.on 事件类型 = function(){}
- ....

### 语法:

- ()=>{}
- () 书写形参的位置
- => 箭头函数的标志
- {} 函数的函数体

```javascript
let ff = () => {
  console.log('888')
}
ff()
```

### 箭头函数特点

#### 1. 可以省略小括号不写

- 当函数只有一个形参的时候,可以不写小括号
- 如果没有形参或有两个以上形参,则必须写小括号

#### 2. 可以省略大括号不写

- 当你的函数内 代码只有一句话(一个表达式)的时候,可以省略大括号哦
- 并且会自动返回这一句的结果,自动把这句代码的结果当做函数的返回值(return 也不写)

#### 3. 箭头函数中没有 arguments

- 箭头函数内没有 arguments 使用

#### 4. 没有 this

- 官方: 箭头函数内的 this 就是上下文的 this
- 私人: 箭头函数内的 this 就是定义箭头函数外部作用域的 this
- 箭头函数内的 this 和调用函数的方式没有关系,和调用箭头函数的位置有关系

## 7.4 函数形参默认值

以前 给函数形参默认值的方式 是在函数内通过短路写法 实现
但是 如果实参的值 是布尔值 false,或 0 或 NaN 的时候有问题

```javascript
let fn = function (n1) {
  n1 = n1 || 10
  console.log(n1)
}
fn() // 10
fn(200) // 200
fn(0) //10
```

ES6 中新增了 给函数形参默认值的方式
直接在函数定义的小括号中，直接给形参赋值，这个值就是函数内形参使用的默认值

```javascript
let ff = function (n1 = 10, n2 = 20) {
  console.log(n1, n2)
}
// ff();// 形参使用默认值  n1为10  n为20
// ff(66);// 形参n1使用实参传递的66 形参n2使用默认值  n1为66  n2为20
ff(66, 88) // 形参n1使用实参传递的66 形参n2使用实参传递的88  n1为66  n2为88
注意: 箭头函数中如果形参使用了默认值, 则不能省略小括号
let f1 = (n = 30) => {
  console.log(n)
}
// f1()
f1(10)
```

## 7.5 模板字符串

js 中单引号或双引号包裹的就是字符串 1.使用单引号或双引号包裹的字符串 中不能换行

```javascript
let str = 'hello
world';
```

2. 使用单引号或双引号包裹的字符串中不能解析变量

```javascript
let user = 'leon'
let str = 'hello user'
console.log(str)
```

ES6 中新增了字符串的形式 模板字符串
模板字符串: 使用反引号包裹 ``

1. 在模板字符串中可以换行书写
2. 在模板字符串中可以解析变量, ${变量}
在${} 中可以执行一些简单的代码

```javascript
var n = 10
var str = `hello ${n}
  world;
`
console.log(str)
document.body.innerHTML = str
```

## 7.6 对象简写

```javascript
let username = '张三'
let userage = 18
// 对象
let obj = {
  // username: username,
  // 如果对象的属性名 和属性值的变量名一样,则可以简写
  // 将属性名和冒号省略
  username,
  userage,
  // 在对象中如果属性对应的值只一个匿名函数,也可以简写
  // 将冒号也function省略
  // fn:function(){console.log( 666 )}
  fn() {
    console.log(666)
  },
}
console.log(obj)
obj.fn()
```

## 7.7 解构赋值

- 作用: 快熟的获取数据解构中某一个值
- 两种:
  - 解构数组
  - 解构对象

### 解构数组

- 语法: 解构 = 数组
- 数组解构使用 []
  - [] 在赋值等号的 左边的叫做 解构
  - [] 在赋值等号的 右边的叫做 数组
- 在 [] 内按照索引书写变量即可

```javascript
let [n1, n2, n3, n4, n5] = ['a', 'b', 'c', 'd']
console.log(n1, n2, n3, n4)
console.log(n5) // undefined

// 使用解构数组 来交换变量的值
let n1 = 100
let n2 = 200
console.log('交换前:', n1, n2)
// 等号右边是数组,等号左边是解构
;[n2, n1] = [n1, n2]
console.log('交换后:', n1, n2)
```

- 多维数组的解构
  - 把原数组赋值一份一模一样的放在解构位置
  - 把数据换为变量

```javascript
// 解构多维数组
const arr = [100, 200, [300, 400, [500]]]
let [n1, n2, [n3, n4, [n5]]] = arr
console.log(n1, n2, n3, n4, n5)
```

### 解构对象

- 语法: 解构 = 对象
  - 解构对象使用 {}
  - {} 书写在 赋值等号的左边 表示 解构
  - {} 书写在 赋值等号的右边 表示 对象
- 在左边的 {} 中 你需要书写解构的 key(属性名)
- 对象解构可以起别名
  - 在解构中,除了书写可以获取的 key,可以在 key:别名

```javascript
// 解构对象
let obj = { username: 'leon', age: 18 }

let { username, age } = obj // 等价于 let username = obj.username = obj.age
console.log(username, age) //  leon 18

let { age: userage } = obj // 等价于 let userage = obj.age
console.log(userage) // 18
```

- 对象的多维解构
  - 解构多维对象数据
  - 直接把对象数据类型复制一遍,放在解构位置
    - 如果你需要用别名,那么把值换成别名
    - 如果不需要别名,那么直接去掉值

```javascript
let o = {
  name: 'xiaobin',
  age: 20,
  info: {
    height: 180,
    weight: 180,
    addr: {
      city: '云南',
    },
  },
}
let {
  name: username,
  age,
  info: {
    height,
    weight,
    addr: { city },
  },
} = o
console.log(username, age, height, weight, city) // xiaobin 20 180 180 云南
```

## 7.8 点点点运算符

### 展开运算符

- 可以展开数组和对象
- 注意:
  - 展开的对象需要放在 {}
  - 展开的数组需要放在 [] 或方法函数实参位置

```javascript
// 展开数组
let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c']
console.log(...arr) // 1 2 3 4 5 "a" "b" "c"

// 合并数组
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
var newArr = [...arr1, ...arr2]
console.log(newArr) // [1, 2, 3, 4, 5, 6, 7, 8]

// 合并对象使用
let o = { name: 'leon', age: 18 }
let obj = {
  gender: '男',
  ...o,
}
console.log(obj)
```

### 合并运算符

- ... 既可以展开数组, 也可以合并多个数据,得到数组
- 当 ...用于函数形参位置的时候,就是一个合并运算符,可以将多个实参合并起来得到一个数组

```javascript
let fn = function (...arr) {
  console.log(arr) // [1, 2, 3, 4, 5, 6]
}
fn(1, 2, 3, 4, 5, 6)

// 合并运算符,可以适当的弥补箭头函数内没有argumenst的缺陷
let ff = (...ars) => {
  console.log(ars) // [1, 2, 32, 34, 4]
}
ff(1, 2, 32, 34, 4)
let ff = (n1, n2, n3, ...ars) => {
  console.log(n1, n2, n3) // 1 2 3
  console.log(ars) //  [4, 5, 6, 7]
}
ff(1, 2, 3, 4, 5, 6, 7)
```

## 7.9 模块化开发

- 2015 年发布。ES6 语法自带了一个模块化标准，默认是严格模式
- 2016 年开始，Vue 出现了，搭建脚手架，内置 ES6 模块化标准
- 2018 年中，Chrome 率先原生支持 ES6 模块化
- 语法：变成了 JS 的语法，和关键字，不需要任何第三方文件的引入
- 特点：页面必须在浏览器打开
  - live server 插件
  - 如果你想使用模块化语法，script 标签要加一个属性 type='module'

### 模块化语法规则

- 当你开始使用模块化语法的时候
- 每一个 js 文件都会变成独立的 js 文件,相互之间没有任何关系
  - 文件和文件之间不共通
  - 我们把每一个独立文件 叫做文件作用域(模块作用域)
- 当你需要互通数据的时候
  - 需要使用导入导出语法

### 导出语法:

- 在当前自己文件内,把某一些数据向外暴露
  - 语法 1: `export default 导出的内容`
  - 语法 2: `export 数据` `export let num = 200`

```javascript
const num = 666
const foo = 'bar'
// 导出语法1
export default { num, foo }
// 导出语法2
export const msg = '你好'
export const code = 1
/* 
  相当于向外暴露了
  {
    default:{num,foo},
    msg,
    code
  }
*/
```

### 导入语法:

- 在当前自己文件内,把某一些文件导入到自己内部(目的: 为了使用改文件暴露的数据,并执行改文件)
  - 语法 1: `import 变量名 form 文件名`
  - 语法 2: `import { } from 文件名`
  - 语法 3: `import('./a.js').then(function (res) { console.log(res) }`
    - import 文件名
    - 此语法导入不接受数据

```javascript
// 语法1:
import moduleA from './modules/a.js'
console.log(moduleA)

// 语法2:
import { msg, code } from './modules/a.js'
console.log(msg)
console.log(code)

// 语法3
import ff from './modules/b.js'
ff()
```

- 注意：
  - 导入语法 1 只能导入 导出语法 1 的内容
  - 导入语法 2 只能导入 导出语法 2 的内容

## 7.10 this 指向 --- this 是 js 中的关键字

- 官方: 指当前代码执行的上下文环境(context)
- 个人解释:
  - 就是在一个作用域中(全局/局部)的关键字
  - 全局作用域 this 在 全局作用域中,this 就是 window(就是指前端)
- 函数使用：不管函数怎么定义，不管函数在哪定义，只看函数的调用（箭头函数除外）

### 函数作用域 this (背诵)

#### 1. 普通调用

- 函数名()
- 函数内的 this 指向 window

#### 2. 对象调用

- 对象.函数名()
- 函数内的 this 指向 调用函数的对象

#### 3. 事件处理函数

- 事件源.on 事件类型 = 函数
- 事件源.addEventListener('事件类型',函数)
- 事件触发的时候,执行的函数中 this 指向事件源(事件绑定在哪个身上 )

#### 4. 定时器调用

- setTimeout(函数,毫秒)
- setInterval(函数,毫秒)
- 函数中的 this 指向 window

#### 5. 自调用函数

- ;(函数)()
- 函数中的 this 指向 window
- 调用函数的语法
  - ;(函数)()
  - !(函数)()
  - ~(函数)()
  - 特点: 函数定义好之后立即执行

```javascript
;(function () {
  console.log(this)
  console.log(this === window) // true
})()
```

#### 6. 箭头函数

- 唯一一个不看调用方式,只看函数定义位置决定 this 指向
- 箭头函数的 this 指向定义(书写)箭头函数 所在作用域中 this 的指向

```javascript
const obj = {
  ff: function () {
    console.log(this)
  },
  fn: () => {
    // 箭头函数定义在全局中
    console.log(this)
    console.log(this === window) // true
  },
}
obj.fn()
```

### 强行改变 this 的指向

- this 的指向是由函数的调用方式决定的
- 在本次调用函数的时候,改变函数中 this 的指向
- 箭头函数中不能通过 call,apply,bind 方法改变 this 的指向

### 函数的方法(背诵)

#### 1. call

- 语法: 直接在函数名后面连接使用
  - 函数名.call()
  - 对象.函数名.call()
- 参数:
  - 第一个参数: 此次执行函数内 this 的指向
  - 第二个参数开始: 依次给该函数的实参
- 特点: 立即调用函数

#### 2. apply

- 语法: 直接在函数名后面连接使用
  - 函数名.apply()
  - 对象.函数名.apply()
- 参数:
  - 第一个参数: 此次执行函数内 this 的指向
  - 第二个参数: 是一个数组或伪数组集合,集合中的每一个数据按顺序作为此次函数执行的实参
- 特点: 立即调用函数

#### 3. bind

- 语法: 直接在函数名后面连接使用
  - 函数名.bind()
  - 对象.函数名.bind()
- 参数:
  - 第一个参数: 新函数内 this 的指向
  - 第二个参数开始: 依次给该函数的实参
- 特点: 不会立即调用函数,而是返回一个新的函数,新函数和原函数代码一模一样,只不过新函数中的 this 指向 第一个参数(此函数中的 this 锁死了)
- 一般用在定时器和事件处理函数上

```javascript
// 通调用
console.log('普通调用')
fn(10, 20)

console.log('通过函数的call方法调用')
fn.call(obj, 100, 200)

console.log('通过函数的apply方法调用')
fn.apply(obj, [100, 200])

console.log('通过函数的bind方法调用返回一个新函数')
let ff = fn.bind(obj, 20, 30)
// 此时变量ff中得到一个新函数的地址,且新函数中的this锁死了 执行obj
ff()
```

## 7.11 万能检测数据类型

> 语法: Object.prototype.toString.call(你要检测的数据)
> 返回值: '[object 数据类型]'

```javascript
console.group('Object.prototype.toString.call')
console.log(Object.prototype.toString.call(1)) // [object Number]
console.log(Object.prototype.toString.call('1')) // [object String]
console.log(Object.prototype.toString.call(false)) // [object Boolean]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(function () {})) // [object Function]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call({})) // [object Object]
console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call(new RegExp())) // [object RegExp]
console.log(Object.prototype.toString.call(new Date())) // [object Date]
```

### json 格式字符串

约定: 按照字符串内存储的内容对字符串进行一些类的分类划分

- 普通字符串: 'werewte' "werwetre" `etreytess`
- 数字字符串: '124235436457243235'
- html 格式字符串: `<div>666</div>`
- 查询字符串: 'key1=value1&key2=value2'

#### json 格式字符串:

- 字符串内写的是对象: '{"name":"leon","age":18}'
- 字符串内写的是数组: '[{"name":"leon","age":18},{"name":"jessica"","age":19}]'

#### 格式要求:

1. json 格式字符串内: 键名 的位置必须是使用 双引号 包裹
2. json 格式字符串内: 将值的位置,如果是数值或布尔,不需要包裹
3. json 格式字符串内: 必须是对象或数组(数组内一般是一个一个对象)的形式
4. json 格式字符串内: 不会包含函数数据类型
5. json 格式字符串内: 最后一条数据不要用逗号
6. json 格式字符串内: 除了引号以外的内容,只能用冒号 逗号 大括号 中括号 书写的就是 js 对象或数组数据

#### 注意

- js 给我们提供了 json 格式 转换的方法
  - json 格式数据和对象或数组的转换
- json 格式 的数据一般都是 我们前端请求后端接口,后端返回的数据(字符串)
  - 目前前后端交互的数据中 json 格式的数据占大部分
- json 格式 是一种独立的格式,我们也已直接书写 .json 文件

```javascript
// 1. js 的数据类型 转为 json格式字符串
// 语法: JSON.stringify(要转的js格式数据)
// 返回值: json格式字符串
let obj = { name: 'zs', age: 18, gender: true }
let resStr = JSON.stringify(obj)
// console.log( resStr );// '{"name":"zs","age":18,"gender":true}'
let arr = [
  { name: 'zs', age: 18, gender: true },
  { name: 'ls', age: 19, gender: false },
]
console.log(JSON.stringify(arr))
// '[{"name":"zs","age":18,"gender":true},{"name":"ls","age":19,"gender":false}]'

// 2. json格式字符串 转为js数据类型
// 语法: JSON.parse(json格式字符串)
// 返回值: 数组或对象
// 注意: 参数只能是一个合法的 json格式字符串 否则报错
let str1 = '{"name":"zs","age":18,"gender":true}'
let str2 =
  '[{"name":"zs","age":18,"gender":true},{"name":"ls","age":19,"gender":false}]'
console.log(JSON.parse(str1))
console.log(JSON.parse(str2))
```

## 7.12 运动函数

```javascript
/**
 * @description: 简单的运动函数
 * @param {Object} ele     运动的元素
 * @param {Object} target 多个运动的样式和目标值组成的对象
 * @param {Function} fn  运动结束后执行的回调函数
 */
function move(ele, target, fn = () => {}) {
  let count = 0
  // target 有多少开启几个定时器
  for (let key in target) {
    count++
    if (key === 'opacity') target[key] *= 100
    let timer = setInterval(function () {
      let current
      if (key === 'opacity') {
        current = getStyle(ele, 'opacity') * 100
      } else {
        current = parseInt(getStyle(ele, key))
      }
      // 计算本次移动的距离
      let distance = (target[key] - current) / 50
      // 取整
      distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)
      if (target[key] === current) {
        clearInterval(timer)
        count--
        // 当 count === 0 时表示结束
        if (!count) {
          fn()
        }
      } else {
        if (key === 'opacity') {
          ele.style[key] = (current + distance) / 100
        } else {
          ele.style[key] = current + distance + 'px'
        }
      }
    }, 30)
  }
}
// 获取元素的非行内样式 样式元素.样式名
function getStyle(ele, style) {
  if (getComputedStyle) {
    return window.getComputedStyle(ele)[style]
  } else {
    return window.currentStyle[style]
  }
}
```

## 7.13 轮播图

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <title>love life</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      .banner {
        width: 600px;
        height: 400px;
        border: 10px solid #333;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
      }

      .banner ul {
        width: 500%;
        overflow: hidden;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }

      .banner ul li {
        width: 600px;
        height: 100%;
        float: left;
        font-size: 100px;
        color: #fff;
        text-align: center;
        line-height: 400px;
      }

      .banner ol {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        border-radius: 15px;
      }

      .banner ol li {
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
      }

      .banner ol li.active {
        background-color: red;
      }

      .banner div {
        display: none;
        width: 100%;
        height: 60px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .banner:hover.banner div {
        display: block;
      }

      .banner div p {
        float: left;
        width: 40px;
        height: 60px;
        font-size: 30px;
        color: #fff;
        text-align: center;
        line-height: 60px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 0 30px 30px 0;
        cursor: pointer;
      }

      .banner div p:last-child {
        float: right;
        border-radius: 30px 0px 0px 30px;
      }

      .banner div p:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    </style>
  </head>

  <body>
    <div class="banner">
      <ul class="img_box">
        <li style="background-color: pink;">1</li>
        <li style="background-color: red;">2</li>
        <li style="background-color: blue;">3</li>
        <li style="background-color: yellow;">4</li>
        <li style="background-color: green;">5</li>
      </ul>
      <!-- 焦点盒子 -->
      <ol>
        <!-- <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li> -->
      </ol>
      <!-- 左右切换盒子 -->
      <div>
        <p class="left">&lt;</p>
        <p class="right">&gt;</p>
      </div>
    </div>
    <script src="./运动函数.js"></script>
    <script>
      let ul = document.querySelector('.banner ul')
      let ol = document.querySelector('.banner ol')
      let banner = document.querySelector('.banner')

      // 准备变量
      // 获取可视区域的宽度
      let bannerWidth = banner.clientWidth
      // 定时器
      let timer = 0
      // 记录第几张
      let index = 1
      // 开关
      let flag = true

      // 生成焦点
      setPoint()
      function setPoint() {
        // 拿到ul下的元素
        let num = ul.children.length
        // 创建文档碎片 就是一个袋子
        let frg = document.createDocumentFragment()
        for (let i = 0; i < num; i++) {
          // 创建元素节点
          let li = document.createElement('li')
          // 操作自定义属性(非H5)
          li.setAttribute('type', 'point')
          li.setAttribute('point_index', i + 1)
          if (i === 0) li.classList.add('active')
          // 插入节点到文档碎片
          frg.appendChild(li)
        }
        // 把文档碎片里面的内容添加到 ol
        ol.appendChild(frg)
        ol.style.width = 30 * num + 'px'
      }

      // 赋值元素
      copyEle()
      function copyEle() {
        // 克隆第一个节点
        let first = ul.firstElementChild.cloneNode(true)
        // 克隆最后一个节点
        let last = ul.lastElementChild.cloneNode(true)
        // 第一个克隆节点插入到最后面
        ul.appendChild(first)
        // 最后一个克隆节点插入到最前面
        ul.insertBefore(last, ul.firstChild)
        // 获取ul下的元素个数 在设置宽度
        ul.style.width = ul.children.length * 100 + '%'
        ul.style.left = -bannerWidth + 'px'
      }

      // 自动轮播
      autoPlay()
      function autoPlay() {
        timer = setInterval(function () {
          index++
          move(ul, { left: -index * bannerWidth }, moveEnd)
        }, 2000)
      }

      // 运动结束
      function moveEnd() {
        // 判断到最后一张时瞬间定位回第一张
        if (index === ul.children.length - 1) {
          index = 1
          // 瞬间定位就是直接赋值
          ul.style.left = -index * bannerWidth + 'px'
        }
        if (index === 0) {
          index = ul.children.length - 2
          ul.style.left = -index * bannerWidth + 'px'
        }

        // 焦点配套
        for (let i = 0; i < ol.children.length; i++) {
          ol.children[i].className = ''
        }
        ol.children[index - 1].className = 'active'
        // 解决鬼畜 开启开关
        flag = true
      }

      // 移入移除
      overOut()
      function overOut() {
        // 移入停止定时器，不在轮播
        banner.addEventListener('mouseover', () => clearInterval(timer))
        // 移除开启定时器，开启轮播
        banner.addEventListener('mouseout', () => autoPlay())
      }

      // 点击事件
      bindEvent()
      function bindEvent() {
        banner.addEventListener('click', function (e) {
          // 获取对象处理函数
          e = e || window.event
          // 事件传播机制 目标元素 target就是点击的属性
          let target = e.target || e.srcElement
          if (target.className === 'right') {
            // 解决鬼畜 判断开关是否关闭 关闭则不执行
            if (flag === false) return
            index++
            move(ul, { left: -index * bannerWidth }, moveEnd)
            // 解决鬼畜 关闭开关
            flag = false
          }
          if (target.className === 'left') {
            // 解决鬼畜 判断开关是否关闭 关闭则不执行
            if (flag === false) return
            index--
            move(ul, { left: -index * bannerWidth }, moveEnd)
            // 解决鬼畜 关闭开关
            flag = false
          }
          // 判断点击的是焦点
          if (target.getAttribute('type') === 'point') {
            // 解决鬼畜 判断开关是否关闭 关闭则不执行
            if (flag === false) return
            index = target.getAttribute('point_index') - 0
            move(ul, { left: -index * bannerWidth }, moveEnd)
            // 解决鬼畜 关闭开关
            flag = false
          }
        })
      }

      // 解决鬼畜 切换标签时关闭定时器
      chuangeTab()
      function chuangeTab() {
        // 页面离开
        document.addEventListener('visibilitychange', () => {
          // visibilityState 里面有两个值，离开hidden，回来visible
          if (document.visibilityState === 'hidden') {
            clearInterval(timer)
          } else if (document.visibilityState === 'visible') {
            autoPlay()
          }
        })
      }
    </script>
  </body>
</html>
```

## 7.14 渐隐渐显轮播图

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <title>love life</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      .banner {
        width: 600px;
        height: 400px;
        border: 10px solid #333;
        margin: auto;
        /* overflow: hidden; */
        position: relative;
      }

      .banner ul {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      .banner ul li {
        width: 100%;
        height: 100%;
        float: left;
        font-size: 100px;
        color: #fff;
        text-align: center;
        line-height: 400px;
        transition: opacity 0.5s linear;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }

      .banner ul li.active {
        opacity: 1;
      }

      .banner ol {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        border-radius: 15px;
      }

      .banner ol li {
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
      }

      .banner ol li.active {
        background-color: red;
      }

      .banner div {
        display: none;
        width: 100%;
        height: 60px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .banner:hover.banner div {
        display: block;
      }

      .banner div p {
        float: left;
        width: 40px;
        height: 60px;
        font-size: 30px;
        color: #fff;
        text-align: center;
        line-height: 60px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 0 30px 30px 0;
        cursor: pointer;
      }

      .banner div p:last-child {
        float: right;
        border-radius: 30px 0px 0px 30px;
      }

      .banner div p:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    </style>
  </head>

  <body>
    <div class="banner">
      <ul class="img_box">
        <li
          class="active"
          style="background-color: pink;">
          1
        </li>
        <li style="background-color: red;">2</li>
        <li style="background-color: blue;">3</li>
        <li style="background-color: orangered;">4</li>
        <li style="background-color: green;">5</li>
      </ul>
      <!-- 焦点盒子 -->
      <ol></ol>
      <!-- 左右切换盒子 -->
      <div>
        <p class="left">&lt;</p>
        <p class="right">&gt;</p>
      </div>
    </div>
    <script src="./运动函数.js"></script>
    <script>
      let banner_ul = document.querySelector('.banner>ul')
      let banner_ol = document.querySelector('.banner>ol')
      let banner = document.querySelector('.banner')
      let banner_div = document.querySelector('.banner_div')

      let index = 0
      let timer = 0

      setPoint()
      function setPoint() {
        let num = banner_ul.children.length
        // 文档碎片
        let frg = document.createDocumentFragment()
        for (let i = 0; i < num; i++) {
          let li = document.createElement('li')
          li.classList.add('point')
          li.dataset.point = i
          if (i === 0) {
            li.classList.add('active')
          }
          frg.appendChild(li)
          banner_ol.appendChild(frg)
          banner_ol.style.width = num * 35 + 'px'
        }
      }

      function changOne(type) {
        banner_ul.children[index].classList.remove('active')
        banner_ol.children[index].classList.remove('active')
        if (type === true) {
          index++
        } else if (type === false) {
          index--
        } else {
          index = type
        }
        if (index >= banner_ul.children.length) {
          index = 0
        } else if (index < 0) {
          index = banner_ul.children.length - 1
        }
        banner_ul.children[index].classList.add('active')
        banner_ol.children[index].classList.add('active')
      }

      autoPlay()
      function autoPlay() {
        timer = setInterval(function () {
          changOne(true)
        }, 1000)
      }

      overOut()
      function overOut() {
        banner.addEventListener('mouseover', () => clearInterval(timer))
        banner.addEventListener('mouseout', () => autoPlay())
      }

      bindEvent()
      function bindEvent() {
        banner.addEventListener('click', function (e) {
          e = e || window.event
          let target = e.target || e.srcElement
          if (target.className === 'left') {
            changOne(false)
          }
          if (target.className === 'right') {
            changOne(true)
          }
          if (target.className === 'point') {
            let pointIndex = target.dataset.point - 0
            changOne(pointIndex)
          }
        })
      }

      changeTab()
      function changeTab() {
        document.addEventListener('visibilitychange', () => {
          // visibilityState 里面有两个值，离开hidden，回来visible
          if (document.visibilityState === 'hidden') {
            clearInterval(timer)
          } else if (document.visibilityState === 'visible') {
            autoPlay()
          }
        })
      }
    </script>
  </body>
</html>
```
