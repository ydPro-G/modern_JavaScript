// 除了函数声明外，另一种创建函数的语法称为函数表达式
 //  一个函数是表示一个行为的值，字符串或数字代表数据，函数被视为一个行为




// 1.函数表达式实例：
let sayHi = function() {   // 函数被创建，并被明确地分配给一个变量，不管函数怎么定义，都只是存储在变量sayHi中的值
    alert('hello');
}



// 2.函数表达式复制实例：
let sayHi = function() {  // 创建函数表达式
    alert("hello!");
};

let func = sayHi; // 复制sayHi函数本身
let fund = sayHi(); // 加了括号之后就复制的是sayHi的调用结果。而不是sayHi函数本身

func() // hello 打印复制的值
sayHi(); // hello 打印值





// 3.函数表达式与函数声明的不同：末尾分号
function sayOne() {
    //函数声明
}

let sayTwo = function() {
    // 函数表达式
};

// 函数表达式有分号
//：在代码块结尾不需要加分号，if{},for{},function f{},不用加分号
// 函数表达式是在语句内部，它不是代码块而是一个赋值语句，所以需要加分号终止语句












// 回调函数：将函数作为值来传递以及如何使用函数表达式

//  前提：一个函数ask(question,yes,no)   question(关于问题的文本),yes(运行的脚本),no（运行的脚本）
function ask(question,yes,no) {
    if (confirm(question)) yes()  // confirm 弹出选择框
    else no();
}

function showOk() {
    alert("you agreed");
}

function showNo() {
    alert("you canceled the execution");
}

// 用法：函数showOk和showNo作为参数传入到ask
ask("Do you agree?",showOk,showNo); // 调用函数ask，传入问题，将函数作为形参传入，这样的函数就是回调函数

// 简写
function ask(question,yes,no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?", // question
    function() {alert("you agreed");},   // 匿名函数
    function() {alert("you no");}   // 匿名函数
);














// 函数表达式 VS 函数声明

 // 1. 函数声明:在主代码流中声明为单独的语句的函数
 function sum(a,b) {
     return a + b;
 }

 // 2.函数表达式：在一个表达式中或另一个语法结构中创建的函数
 let sum = function(a,b) {
     return a + b;
 }; // 终结分号，因为这是一个赋值语句

 /* 更深层的不同：函数声明是JavaScript准备运行脚本时被创建的，这样一个全局函数声明在全局都是可见的，
 无论在那个位置. 
函数声明：在函数声明被定义之前，它就可以调用。因为js运行脚本时，先寻找全局函数声明，并创建他们。这是第一步

函数表达式：在代码执行到达时被创建，并在那一刻可用。


函数声明：
全局函数声明与局部函数声明
全局：在全局可见
局部：只在该代码块内可用

*/




/*总结： 
函数是值。它们可以在代码的任何地方被分配，复制或声明。
如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
函数表达式在执行流程到达时创建。*/