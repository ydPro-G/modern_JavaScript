// 箭头函数，基础知识





// 箭头函数：从=>的左侧获取参数，然后使用参数计算右侧表达式的值
// 例子：
let func = (arg1,arg2,argN) => expression // 创建函数func，接受参数arg1-argn，然后使用expression求值并返回结果


// 实例：
let sum = (a,b) => a + b;
/*这个箭头函数是下面这个函数的更短版本
let sum = function(a,b) {
    return a + b;
}; 
*/
alert(sum(1,2));  // 3



// 多行的箭头函数
// 实例：
let sum = (a,b) => { // 花括号表示开始一个多行函数
    let result = a + b;
    return result;   // 如果我们使用了花括号就需要一个显示的“return”
};

alert(sum(1,2)); //3













/*总结：
两种方式：
1.不带花括号  (...args) => expression ——右侧有一个表达式：函数计算表达式并返回其结果
2.带花括号：  (...args) => {body} —— 花括号允许我们在函数中编写多个语句，但是我们需要显式地return来返回一些内容
*/
