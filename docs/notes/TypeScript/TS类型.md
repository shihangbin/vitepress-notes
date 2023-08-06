# TS 类型

## JS 中的类型

### Array 类型

明确的指定<数组>的类型注解: 两种写法

1. string[]: 数组类型,并且数组中存放字符串类型
2. `Array<number>`: 数组类型,并且数组中存放数值类型

```ts
// 注意: 在真实开发中,数组一般存放相同类型,不要存放不同类型
// let names = ['abc', 'cba', 'nba', 123, {}]
// 1.string[]:
let names: string[] = ['abc', 'cba', 'nba']

// 2.Array<number>:
let nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Object 类型

```ts
type infoType = {
	name: string
	age: number
}

let info: infoType = {
	name: '三九',
	age: 19,
}
```

### null or undefined 类型

```ts
let n: null = null
let u: undefined = undefined
```

### number 类型

数字类型是我们开发中经常使用的类型，TypeScript 和 JavaScript 一样，不区分整数类型（int）和浮点型（double），统一为 number 类型。

```ts
let num: number = 123
```

### string 类型

字符串类型，可以使用单引号或者双引号表示：

```ts
let message: string = 'Hello World'
message = 'Hello TypeScript'
```

同时也支持 ES6 的模板字符串来拼接变量和字符串

```ts
const name: string = '三九'
const age: number = 18

const info = `my name is ${name}, age is ${age}.`
```

### boolean 类型

布尔类型只有两个取值：true 和 false，非常简单

```ts
let flag: boolean = true
flag = false
flag = 20 > 30
```

## 函数的类型

### 参数 or 返回值

```ts
// 在我们定义一个 TypeScript 中的函数时, 都需要指定参数类型
// 返回值类型可以明确指定, 也可以自动进行推导
function sum(num1: number, num2: number): number {
	return num1 + num2
}
let res = sum(123, 321)
```
