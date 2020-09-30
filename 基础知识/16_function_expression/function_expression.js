// 除了函数声明外，另一种创建函数的语法称为函数表达式
 
let sayHi = function() {   // 函数被创建，并被明确地分配给一个变量，不管函数怎么定义，都只是存储在变量sayHi中的值
    alert('hello');
}
alert(sayHi); // 显示代码函数
let func = sayHi;   // 复制函数到其他变量，
let func = sayHi(); // 复制调用结果

