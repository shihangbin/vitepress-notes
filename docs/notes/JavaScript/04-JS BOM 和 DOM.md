# 四、BOM 和 DOM

## 4.1 BOM 浏览器对象模型

> 浏览器对象模型: 所有的浏览器操作方法都在对象中

1. BOM 中的顶级对象   是 window
1. 浏览器操作中的各个操作对象 都是 window 对象的属性成员
1. 全局中的 this 和 top 关键字 指向 window 对象
1. BOM 操作中 可以省略 window，比如: 浏览器弹窗  windiw.alert()，实际使用中可以省略 window 直接 alert()
1. 在全局中通过 var 定义的变量或函数 其实就是添加在 window 对象中的属性和方法

### 浏览器事件

#### (1) load   浏览器加载事件

```javascript
// 1. load  浏览器加载事件(当浏览器页面中将所有资源[图片,cssm,js....]都加载完毕的时候触发)
window.onload = function () {
  // 这个函数会在 页面中所有内容都加载完毕后才触发 执行
  console.log(dv) // <div id="dv"></div>
}
```

#### (2) scroll   浏览器页面滚动滚动事件

```javascript
// 2. scroll  浏览器页面滚动滚动事件
window.onscroll = function () {
  console.log('浏览器滚动了')
}
```

#### (3) resize   浏览器可视窗口的尺寸变化事件

```javascript
// 3. resize  浏览器可视窗口的尺寸变化事件
window.onresize = function () {
  console.log('窗口大小变化了')
}
```

### BOM 的相关操作

#### (1) 获取浏览器的窗口尺寸

1. window.innerWidth     浏览器可视窗口的宽度(包含滚动条)
1. window.innerHeight   浏览器可视窗口的高度(包含滚动条)

```javascript
console.log(window.innerWidth)
console.log(window.innerHeight)

// 在窗口大小变化事件中获取窗口大小
// 当浏览器可视窗口大小小于 800的时候div不显示
window.onresize = function () {
  console.log(window.innerHeight)
  console.log(window.innerWidth)
  if (window.innerWidth < 800) {
    // div隐藏
    dv.style.display = 'none'
  } else {
    dv.style.display = 'block'
  }
}
```

#### (2) 浏览器信息

> 浏览器信息通过 navigator 对象获取,window.navigator

```javascript
// 1. 获取浏览器整体信息
console.log(navigator.userAgent) // Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36
```

#### (3) 浏览器地址栏

**1. location.href 获取设置浏览器地址 url 的**

```javascript
// location.href 获取设置浏览器地址url的,如果给location.href一个新的地址,则页面会发生跳转
btn1.onclick = function () {
  location.href = 'http://www.xiaobinw.cn'
}
// 地址中的 中文等特殊字符会被转为url编码格式展示
console.log(location.href)
```

**2. location.reload()   刷新页面**

```javascript
// location.reload()  刷新页面,注意: 不要在全局中直接书写,不然会一直刷新页面
location.reload()
btn2.onclick = function () {
  location.reload()
}
```

#### (4) 浏览器的历史记录信息

**1. history.back()**
回退到历史记录中的上一个页面,前提要有历史记录

**2. history.forward()**
前进到历史记录中的下一个页面,前提要有历史记录

**3. history.go(n)**
n 为正数则前进到历史记录中的前几个页面
n 为负数则回退到历史记录中的后几个页面
history.go(-1) 相当于 history.back()
history.go(1) 相当于 history.forward()
history.go() 会刷新页面

#### (5) 浏览器的滚动距离

> 浏览器水平滚动距离
> 浏览器垂直滚动距离

**1.页面有 DOCTYPE 文档声明的时候**
通过  document.documentElement.scrollLeft 获取
通过  document.documentElement.scrollTop 获取

```javascript
console.log(window.document.documentElement.scrollLeft)
console.log(document.documentElement.scrollTop)
```

**2.页面没有 DOCTYPE 文档声明的时候**
通过  document.body.scrollLeft 获取
通过  document.body.scrollTop 获取
javascript

```javascript
console.log(document.body.scrollLeft)
console.log(document.body.scrollTop)
```

#### (6) 顶部通栏

```javascript
// 当浏览器滚动距离小于(800)的时候,隐藏顶部通栏,否则显示
window.onscroll = function () {
  // 获取滚动的距离
  var goLength = document.documentElement.scrollTop
  if (goLength >= 800) {
    top1.style.height = '80px' // 显示顶部通栏
  } else {
    top1.style.height = '0px' // 隐藏顶部通栏
  }
}
```

## 4.2 定时器

> 在前端 js 中 代码执行是单线程(同一时间只能做一件事)
> JS 提供给我们一个 异步代码执行机制

异步代码执行机制(EventLoop)

- 当代码执行过程中,遇见异步代码了
- 不会立即执行异步代码,而是将异步代码放到 事件队列池 中等待
- 继续向后执行同步代码
- 等到所有同步代码执行完毕之后,调用栈清空了,再去异步事件队列池中拿到异步代码执行
  定时器中的函数是异步执行的代码

### 定时器开启

#### (1) 延时定时器

- 语法: setTimeout(函数,数字,参数 1,参数 2,参数 3,...)
  - 函数: 表示时间达到的时候要执行的函数
    第一个位置的参数,可以不写函数,写 js 代码字符串也行
  - 数字: 倒计时间, 单位毫秒
  - 第二位置之后的参数,是前面函数执行时候的实参

```javascript
console.log(new Date())
setTimeout(function () {
  console.log('两秒过去了')
  console.log(new Date())
}, 2000)
```

#### (2) 间隔定时器

- 语法: setInterval(函数,数字,参数 1,参数 2,参数 3,...)
  - 函数: 表示每间隔一段时间要执行的函数
    第一个位置的参数,可以不写函数,写 js 代码字符串也行
  - 数字: 倒计时间, 单位毫秒
  - 第二位置之后的参数,是前面函数执行时候的实参

```javascript
setInterval(function () {
  console.log('2s过去了')
}, 2000)
```

### 定时器返回值

- 返回值为数字,表示开始定时器的标识
- 两种定时器的返回值都是一个样
- 不区分定时器种类,只是表示定时器的第几个定时器

```javascript
var t1 = setTimeout(function () {})
var t2 = setInterval(function () {})
console.log('t1:', t1)
console.log('t2:', t2)
```

### 关闭定时器

- 关闭销毁定时器的是,不区分定时器种类,只要给出的定时器标识数是对的,就可以销毁
- 语法:
  - clearInterval(定时器标识)
  - clearTimeout(定时器标识)

```javascript
var t1 = setTimeout(function () {
  console.log('timeout')
}, 3000)
var t2 = setInterval(function () {
  console.log('Interval')
}, 1000)
btn.onclick = function () {
  // clearInterval(t1)
  // clearInterval(t2)
  clearTimeout(t1)
  clearTimeout(t2)
}
```

## 4.3 DOM

> 认识 DOM - Document Object Model 文档对象模型

1. 如何找到页面中我们操作的元素
1. 操作(操作文本,操作属性,操作样式,操作增删改查)

### DOM 获取元素

> 用一个变量保存页面中某一个或某些元素
> 获取元素方法分两类获取非常规元素和获取常规元素

#### (1) 获取非常规元素

- html: document.documentElement
- head: document.head
- body: document.body
- title: document.title

#### (2) 获取常规元素

| 语法                      | 名字                                      | 返回值                                                        |
| ------------------------- | ----------------------------------------- | ------------------------------------------------------------- |
| .getElementById()         | id 获取元素，只能获取一个元素             | 有则返回元素，无则返回 null                                   |
| .getElementsByTagName()   | 标签名来获取元素， 返回类数组             | 有则返回到数组中，无则返回空伪数组                            |
| .getElementsByClassName() | 类名来获取元素， 返回类数组               | 有则返回数组，无则返回空伪数组，为数组有 length 属性          |
| .querySelector()          | 选择器来获取元素， 只能获取到匹配的第一个 | 有则返回第一个元素，无则返回 null                             |
| .querySelectorAll()       | 选择器来获取元素， 返回类数组             | 有则返回数组，无则返回空伪数组，可以使用 forEach 遍历数组方法 |
| Array.from(伪数组)        | 将伪数组转为真数组方                      | 返回一个真数组(元素和伪数组元素一模一样)                      |

### 元素属性

> 标签属性分类有三种

#### (1) 原生属性

- 在 W3C 规范中有的属性名
- 比如: id class style type src href...

#### (2) 自定义属性

- 在 W3C 规范中没有的属性名,是我们自己在书写在标签上的

#### (3) H5 自定义属性

- 目的: 就是为了区分自定义属性和原生属性写在标签上的形式
- 要求: 书写 H5 自定义属性的时候,都要 data- 开头
- 比如: data-index = '888'
  - data- 表示这个是 H5 自定义属性
  - index 表示属性名
  - '888' 表示属性值

### 操作元素属性

#### (1) 操作原生属性

- 语法: 元素.属性名 = 属性值
- 注意: 如果遇到布尔类型属性,可以使用 false 或 true 赋值

#### (2) 操作自定义属性(非 H5)

```html
<div
  id="box"
  index="666"
  data-index="888"
  data-id="999">
  hello
</div>
<img
  src="https://img1.baidu.com/it/u=3923683862,2037492630&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=587" />
<br />
<script>
  //设置 语法: 元素.setAttribute(属性名,属性值)
  dv.setAttribute('stock', 99)

  // 删除 语法: 元素.removeAttribute(属性名)
  dv.removeAttribute('index')

  // 获取 语法: 元素.getAttribute(属性名)
  // 返回值: 该元素自定义属性的值
  var res = dv.getAttribute('index')
  console.log(res) // '666'
</script>
```

#### (3) 操作 H5 自定义属性

> 每一个 元素节点 身上都有一个自带的属性名叫做 dataset
> 这个属性的值是一个类似于 对象的数据结构,存储的改标签上所有的 H5 自定义属性
> H5 自定义属性的操作,就是对象 dataset 这个数据结构的操作(同对象操作语法)

```javascript
// 获取元素
var dv = document.getElementById('box')
var img = document.querySelector('img')
// 查 语法: 元素.dataset.属性名
console.log(dv.dataset.size)

// 增 语法: 元素.dataset.属性名 = 属性值
dv.dataset.size = 999

// 改 语法: 元素.dataset.属性名 = 属性值
dv.dataset.id = 777

// 删 语法: delete 元素.dataset.属性
delete dv.dataset.index
```

#### (4) 练习全选案例

1. 全选按钮的点击操作

- 当全选按钮是选中的状态的时候,所有选项按钮都是选中状态
- 当全选按钮是未选中的状态的时候,所有选项按钮都是未选中状态

2. 点击每一个选项按钮的操作

- 每一个选项按钮点击的时候,都要判断
- 如果所有选项按钮都是选中状态,则全选按钮选中
- 如果所有选项按钮有任何一个未选中,则全选按钮未选中

```css
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100px;
  padding: 20px;
  margin: 50px auto;
  border: 2px solid #333;
  border-radius: 10px;
}
hr {
  margin: 10px 0;
}
```

```html
<div class="box">
  <input
    type="checkbox"
    class="all" />全选
  <hr />
  <input
    type="checkbox"
    class="item" />
  选项一<br />
  <input
    type="checkbox"
    class="item" />
  选项二<br />
  <input
    type="checkbox"
    class="item" />
  选项三<br />
  <input
    type="checkbox"
    class="item" />
  选项四<br />
</div>
```

```javascript
// 获取元素
var allBtn = document.querySelector('.all')
// 将伪数组转为真数组方法
// 语法: Array.from(伪数组)
// 返回一个真数组(元素和伪数组元素一模一样)
// 为了后面方便操作,将获取的所有选项按钮伪数组转为真数组
var items = Array.from(document.querySelectorAll('.item'))
// 1. 全选按钮的点击操作
allBtn.onclick = function () {
  // 遍历选项按钮数组
  items.forEach(function (item) {
    // 将全选按钮的 选中 状态给每一个选项按钮
    item.checked = allBtn.checked
  })
}
// 2. 点击每一个选项按钮的操作
items.forEach(function (item) {
  // 遍历选项按钮元素数组,给每一个选项按钮点击事件
  item.onclick = function () {
    // 事件处理函数
    // 通过数组的every方法 判断 是否 每一个选项按钮都是 选中
    //  选项按钮全选中为true,只有有一个没有选中则为false
    // 将结果 给全选按钮的checked属性
    allBtn.checked = items.every(function (item) {
      return item.checked
    })
  }
})
```

### 操作元素的样式

在 js 中操作元素的样式有三种

1. 获取元素行内样式(只能获取元素的行内样式)
1. 获取元素的非行内样式(包含了行内样式和非行内样式)
1. 设置元素的样式(只能设置元素的行内样式)

注意: 涉及到带中划线的样式名的时候

- 转为驼峰写法
- 使用数组关联法

#### (1) 获取元素的行内样式

语法: 元素.style.样式名

```javascript
console.log(ele.style.width) // 100px
console.log(ele.style.height) // 非行内样式
console.log(ele.style.backgroundColor) // green
console.log(ele.style['background-color']) // green
```

#### (2) 获取元素的非行内样式

语法: window.getComputedStyle(你要获取样式的元素).样式名

```javascript
// 注意：getComputedStyle在低版本ie中不能使用
console.log(window.getComputedStyle(ele).width) // 100px
console.log(window.getComputedStyle(ele).height) // 200px
console.log(window.getComputedStyle(ele).fontSize) // 20px
console.log(window.getComputedStyle(ele)['font-size']) // 20px

// 在低版本ie中获取元素的非行内样式
// 语法: 元素.currentStyle.样式名  在主流浏览器中不能使用
console.log(ele.currentStyle.fontSize) // 20px
console.log(ele.currentStyle.width) // 100px
```

#### (3) 设置元素的样式(只能设置行内样式)

语法: 元素.style.样式名 = 样式值

```javascript
ele.style.backgroundColor = 'blue'
ele.style['background-color'] = 'blue'
ele.style.fontSize = '50px'
```

### 操作元素的类名

1. className

- 就是原生属性的操作 元素.属性名
- 因为 JS 中有一个关键字叫 class,为了避开改名叫做 className
- 注意: 类名的值 是字符串,可以多个类名一起

2. classList

- 每一个元素身上都有一个属性 叫做 classList
- 该属性对应的值是一个类似于 数组的解构,方法是该元素的所有类名
- 增删改查都是对象元素的 classList 操作,有专门的方法
  - 增: 元素.classList.add(类名)
  - 删: 元素.classList.remove(类名)
  - 切换: 元素.classList.toggle(类名)
  - 原来有该类名则删除,没有则添加

```javascript
// className
// 设置: 元素.className = "值"
// 因为是用的是 = 赋值,会把之前的类名覆盖
ele.className = 'box'
ele.className = ''
// 追加类名 元素.className += ' 值'
ele.className += ' box'

// classList
console.log(ele.classList)
// 增
ele.classList.add('box')
ele.classList.add('active')
// 删除
ele.classList.remove('b')
// 切换
ele.onclick = function () {
  ele.classList.toggle('active')
}
```

### 操作元素的内容

#### (1) innerText

读

- 语法: 元素.innerText
- 获取元素的所有文本内容
  写
- 语法: 元素.innerText = '值'
- 作用: 完全覆盖是的书写标签文本内容
- 注意: 没有办法识别解析 html 格式的字符串

```javascript
//  innerText
console.log(ele.innerText)
ele.innerText = '666'
ele.innerText = '<h1>888</h1>'
```

#### (2) innerHTML

是一个读写属性
读

- 语法: 元素.innerHTML
- 获取元素的所有内容(包含了超文本内容),以 html 格式字符串的形式返回
  写
- 语法: 元素.innerHTML = '值'
- 作用: 完全覆盖是的书写标签 超文文本内容
- 注意: 可以识别解析 html 格式的字符串

```javascript
//  innerHTML
console.log(ele.innerHTML)
ele.innerHTML = '666'
ele.innerHTML = '<h1>888</h1>'
```

#### (3) value

表单标签的内容操作
一个读写属性,其实就是原生属性 value 操作
读

- 语法: 表单元素.value
- 得到: 该表单元素的 value 值
  写
- 语法: 表单元素.vlaue = '值'
- 作用: 设置表单元素的 value 值

```javascript
// value
console.log(inp.value)
inp.value = 888
```

### 获取元素的尺寸

> 有两套语法 offsetWdith 和 offsetHeight

#### (1) 语法

- 元素.offsetWdith
  - 获取元素的 内容+padding+border 区域的宽度
- 元素.offsetHeight
  - 获取元素的 内容+padding+border 区域的高度
- 注意: 不管盒子是什么模型,区域不变

```javascript
// // 1. offset方式
console.log(ele.offsetWidth)
console.log(ele.offsetHeight)
```

#### (2) 语法

- 元素.clientWdith
  - 获取元素的 内容+padding 区域的宽度
- 元素.clientHeight
  - 获取元素的 内容+padding 区域的高度

```javascript
// 2. client方式
console.log(ele.clientWidth)
console.log(ele.clientHeight)
```

### 获取元素的偏移量

#### (1) 获取偏移量参考元素

语法: 元素.offsetParent
得到: 该元素的偏移量参考父级

- 就是该元素的定位父级
- 如果到 body 都没有定位父级,那么这里的 offsetParent 就是 body

#### (2)第一套语法

- 元素.offsetLeft
  - 获取元素相对于 offsetParent 的左侧距离
- 元素.offsetTop
  - 获取元素相对于 offsetParent 的上方距离

#### (3)第二套语法

- 元素.clientLeft
  - 获取元素(内容+padding 区域) 相对于该元素 border 左边的尺寸
- 元素.clientTop
  - 获取元素(内容+padding 区域) 相对于该元素 border 上边的尺寸

```javascript
console.log('offsetParent:', spanEle.offsetParent)

console.log('offsetLeft:', spanEle.offsetLeft)
console.log('offsetTop:', spanEle.offsetTop)

console.log('clientLeft:', spanEle.clientLeft)
console.log('clientTop:', spanEle.clientTop)
```

### 获取可视窗口尺寸

BOM 级别获取: 包含滚动条

- innerWidth
- innerHeight

DOM 级别获取: 不包含滚动条

- document.documentElement.clientHeight
- document.documentElement.clientWidth

```javascript
// 获取可视窗口
console.log('BOM')
console.log('宽度', window.innerWidth)
console.log('高度', window.innerHeight)

console.log('DOM')
console.log('宽度', document.documentElement.clientWidth)
console.log('高度', document.documentElement.clientHeight)
```

## 4.4 节点属性

- 节点: 文档中一个小小的组成部分
- 我们的网页有若干个节点组成

常见的 DOM 节点

1. 元素节点     特指页面中所有标签
1. 属性节点     书写在表桥身上的属性
   - 属性节点不作为独立节点出现,只用于修饰标签使用
1. 文本节点     所有的文本内容(包含了换行和空格)
1. 注释节点     所有的注释内容(包含了换行和空格)

### 获取 DOM 节点的方法

#### 1. childNodes

- 语法: 父节点.childNodes
- 得到: 该父节点下的所有子一级节点

#### 2. children

- 语法: 父节点.children
- 得到: 该父节点下的所有子一级元素节点

#### 3. firstChild

- 语法: 父节点.firstChild
- 得到: 该父节点下的第一个子节点

#### 4. firstElementChild

- 语法: 父节点.firstElementChild
- 得到: 该父节点下的第一个子元素节点

#### 5. lastChild

- 语法: 父节点.lastChild
- 得到: 该父节点下的最后一个子节点

#### 6. lastElementChild

- 语法: 父节点.lastElementChild
- 得到: 该父节点下的最后一个子元素节点

#### 7. previousSibling

- 语法: 节点.previousSibling
- 得到: 该节点的上一个兄弟节点

#### 8. previousElementSibling

- 语法: 节点.previousElementSibling
- 得到: 该节点的上一个兄弟元素节点

#### 9. nextSibling

- 语法: 节点.nextSibling
- 得到: 该节点的下一个兄弟节点

#### 10. nextElementSibling

- 语法: 节点.nextElementSibling
- 得到: 该节点的下一个兄弟元素节点

#### 11. parentNode

- 语法: 节点.parentNode
- 得到: 该节点的父节点

#### 12. parentElement

- 语法: 节点.parentElement
- 得到: 该节点的父元素节点

#### 13. attributes

- 语法: 节点.attributes
- 得到: 该节点的所有属性节点
- 注意: 只需要记住元素节点的获取就行

### DOM 节点属性

- 属性节点: 节点类型的一种
- 节点属性: 描述节点的信息
- 所有节点都共有的内容,只是不同节点不一样

常见的节点属性有三种

#### 1. nodeType 节点类型

- 用一个数字来区分不同的节点,给每一个节点做了一个编号
- 元素节点: 1
- 属性节点: 2
- 文本节点: 3
- 注释节点: 8

```javascript
// nodeType
console.log('nodeType')
console.log('元素节点:', ele.nodeType)
console.log('属性节点:', attr.nodeType)
console.log('文本节点:', text.nodeType)
console.log('注释节点:', comment.nodeType)
```

#### 2. nodeName   节点名称

- 元素节点: 大写的标签名
- 属性节点: 属性名
- 文本节点: #text
- 注释节点: #comment

```javascript
// nodeName
console.log('nodeName')
console.log('元素节点:', ele.nodeName)
console.log('属性节点:', attr.nodeName)
console.log('文本节点:', text.nodeName)
console.log('注释节点:', comment.nodeName)
```

#### 3. nodeValue 节点内容

- 元素节点: null
- 属性节点: 属性值
- 文本节点: 文本内容(包含换行和空格)
- 注释节点: 注释内容(包含换行和空格)

```javascript
// nodeValue
console.log('nodeValue')
console.log('元素节点:', ele.nodeValue)
console.log('属性节点:', attr.nodeValue)
console.log('文本节点:', text.nodeValue)
console.log('注释节点:', comment.nodeValue)
```

### 创建节点

- 就是使用 js 创建出一个节点来,但是没有插入到页面中

#### 1. 创建元素节点

- 语法: document.createElement('标签名')
- 返回值: 一个被创建的标签
- 注意: 你可以自定义标签名

```javascript
// 创建元素节点
var crEle = document.createElement('div')
console.log(crEle)
```

#### 2. 创建文本节点

- 语法: document.createTextNode('文本内容')
- 返回值: 文本节点

```javascript
// 创建文本节点
var crText = document.createTextNode('我是文本节点')
console.log(crText)
```

### 插入节点:

- 就是把一个节点方法哦另一个节点内当子节点使用

#### 1. appendChild()

- 语法: 父节点.appendChild(子节点)
- 作用: 把子节点插入到父节点内,并放到最后的位置

#### 2. insertBefore()

- 语法: 父节点.appendBefore(要插入子节点,在哪个子节点前面)

### 删除节点

- 就是把一个节点从本身位置删除

#### 1. removeChild()

- 语法: 父节点.removeChild(子节点)
- 作用: 把子节点从父节点中移除

#### 2. remove()

- 语法: 节点.remove()
- 作用: 把该节点自己干掉

### 替换及克隆节点

#### 1. 替换节点 replaceChild()

- 语法: 父节点.replaceChild(换上节点,换下节点)
- 作用: 在父节点内,换上节点 替换掉 换下节点

#### 2. 克隆节点 cloneNode()

- 语法: 节点.cloneNode(参数)

- 参数默认值为 false: 表示不克隆后代节点
- 如果参数值为 true : 表示克隆后代节点

### 练习

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Leon</title>
    <style>
      table {
        width: 500px;
        margin: 50px auto;
      }
    </style>
  </head>

  <body>
    <table
      border="1"
      cellspacing="0"
      rules="all">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
        <td>1</td>
        <td>lisi</td>
        <td>男</td>
        <td>18</td>
      </tr> -->
      </tbody>
    </table>
  </body>
</html>
<script>
  // 准备数据
  var users = [
    {
      id: 1,
      name: 'lisi',
      gender: '男',
      age: 18,
    },
    {
      id: 2,
      name: 'zs',
      gender: '女',
      age: 19,
    },
    {
      id: 3,
      name: 'leon',
      gender: '男',
      age: 20,
    },
    {
      id: 4,
      name: 'jack',
      gender: '女',
      age: 21,
    },
    {
      id: 5,
      name: 'tom',
      gender: '男',
      age: 22,
    },
  ]
  // 方案一
  // 获取元素
  // var tbody = document.querySelector('tbody');
  // // 1. 根据数组,遍历 创建节点 并追加到tbody中
  // users.forEach(function (item) {
  //   // 每一个 item  创建一个tr元素节点
  //   var tr = document.createElement('tr');
  //   tr.align = 'center'
  //   // 每一个tr内,根据item内有对少数据, 创建多少个td 元素节点并追加到tr中
  //   for (var k in item) {
  //     var td = document.createElement('td');
  //     td.innerText = item[k] // item[k]就是需要在表格中展示的数据
  //     tr.appendChild(td);
  //   }
  //   // 将tr追加到tbody中
  //   tbody.appendChild(tr);
  // })
  // 在循环中多次操作页面DOM节点并插入节点, 效率不高

  // 方案二
  // 获取元素
  var tbody = document.querySelector('tbody')
  // 创建一个文档碎片
  // 语法: document.createDocumentFragment()
  // 常见一个袋子
  var frg = document.createDocumentFragment()

  // 1. 根据数组,遍历 创建节点 并追加到tbody中
  users.forEach(function (item) {
    // 每一个 item  创建一个tr元素节点
    var tr = document.createElement('tr')
    tr.align = 'center'
    // 每一个tr内,根据item内有对少数据, 创建多少个td 元素节点并追加到tr中
    for (var k in item) {
      var td = document.createElement('td')
      td.innerText = item[k] // item[k]就是需要在表格中展示的数据
      tr.appendChild(td)
    }
    // 不直接将tr追加到tbody中,而是把tr放到一个容器中
    // 把tr 放到 '袋子' 中(文档碎片)
    frg.appendChild(tr)
  })

  // 最后 一次性将 '袋子' 中的内容 都放到 tbody中
  tbody.appendChild(frg)
</script>
```
