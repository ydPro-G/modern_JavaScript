// 数据类型

//1.number类型
let n = 123;

//2.Biglnt类型：对于number类型的补充，用来表示任意长度整数
//“number” 类型无法表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。
const bigInt = 111111111111111111111111111111111111111111111111111111111111n;//n表示是一个big_int类型


//3.string
let str = 'hello';
// ''  "" ``
// 反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。
let name = 'john';
// 嵌入一个变量
alert(`hello,${name}!`); // hello john //${}放任何东西，变量，算数表达式
// 嵌入一个表达式
alert('the number is',`${1 + 2}`); // the number is 3 ${…} 内的表达式会被计算，计算结果会成为字符串的一部分。




// 4.boolean 类型:true,false



// 5.null:空，未知

// 6.undefined:未被赋值

// 7.object,symbol

// 8.typeof运算符
// 8.1 返回参数的类型
