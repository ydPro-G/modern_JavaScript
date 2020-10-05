// JavaScript特性



/*
1.代码结构：
 1. 语句用分号分隔；
 1.1 在代码块{...}后以及有代码块的语法结构(循环)后不需要加分号：
     function f() {
         函数声明后不需要加分号
     }
     for(;;) {
         循环语句后不需要加分号
     }

*/






/*
2.严格模式：
现代模式： 'use strict';
 */







 /*
 3.  变量：
 let
 const(不变的，不能被改变的)
 var(旧式)

 3.1 变量名命名：
字母和数字，但是第一个字符不能是数字。
字符 $ 和 _ 是允许的，用法同字母。
非拉丁字母和象形文字也是允许的，但通常不会使用。

3.2 变量是动态类型，它们可以存储任何值：

3.3 数据类型：
number — 可以是浮点数，也可以是整数，
bigint — 用于任意长度的整数，
string — 字符串类型，
boolean — 逻辑值：true/false，
null — 具有单个值 null 的类型，表示“空”或“不存在”，
undefined — 具有单个值 undefined 的类型，表示“未分配（未定义）”，
object 和 symbol — 对于复杂的数据结构和唯一标识符，我们目前还没学习这个类型。

补充：typeof null == "object"  // JavaScript编程语言的设计错误（typeof null 的结果是 "object"。这是官方承认的 typeof 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。null 绝对不是一个 object。null 有自己的类型，它是一个特殊值。）
      typeof function(){} == "function" 函数被特殊对待
 */







/*
4.  交互：
    4.1：prompt(question[,default]):提出一个问题，并返回访问者输入的内容，如果按下[取消]，返回null
    4.2：confirm(question):提出一个问题，用户在yes和no之间选择，选择结果以true.false形式返回
    4.3  alert(message):输出一个消息
    这三种函数都会产生模态框
*/






/*
5. 运算符：
    5.1： 算数运算符：+ - * / ，取余%，幂运算符**
    5.2： + 可以连接字符串
    5.3： 赋值 = 
    5.4： 按位运算符
    5.5： 三元运算符：唯一具有三个参数的操作：cond ? resultA : resultB。如果 cond 是真的，则返回 resultA，否则返回 resultB。
    5.6： 逻辑运算符：
                   逻辑与&&和或||执行短路运算，然后返回运算停止处的值
                   逻辑非！：将操作数转换为布尔值并返回
    5.7：空值合并符：?? 运算符从一列变量中，选取值为已定义的值（defined value）的变量。a ?? b 的结果是 a，除非 a 为 null/undefined，这时结果是 b。
    5.8： 比较运算符： ==   === 
*/












/*
6. 循环：
三种类型的循环：
  6.1 
     while(condition) {
         ....
     }
    
  6.2
    do{
        ...
    }while(condition);

  6.3
    for(let i = 0; i < 10; i++){
        ...
    }

    在for(let...)循环内部声明的变量，只在该循环内部可见
    指令break/continue允许退出整个循环/当前迭代，使用标签来打破嵌套循环
*/









/*
7. switch结构
switch(age) {
    case 1:
        ...
        break;
    case 2:
        ...
        break;
    case 3:
        ...
        break;
    
}
*/











/*
8. 函数：
  8.1 函数声明：主流代码中的函数
  function sum(a,b) {
      let result = a + b;

      return result;
  }

  8.2 函数表达式：表达式上下文中的函数
  let sum = function(a,b) {
      let result = a + b;

      return result;
  }


  8.3 箭头函数：
  表达式在右侧： let sum = (a,b) => a + b;

  // 或带{...}的多行语法，此处需要return
  let sum = (a,b) => {
      ...
      return a + b;
  }



  //没有参数
  let sayHi = () => alert("Hello");


  // 有一个参数
  let double = n => n * 2;





  函数可能具有局部变量：在函数内部声明的变量，这类变量只在函数内部可见
  参数可以有默认值：function sum(a = 1,b = 2) {....}
  函数总是返回一些东西，如果没有return语句，那么返回的结果是undefined
*/


