// While 循环
while(condition) { //当条件为true时执行循环体code
    //代码
    // 循环体
}

let i = 0;
while (i < 3){ 
    alert( i ); // 弹窗显示0，1，2
    i++; // i每次循环+1
} //循环体执行一次叫一次迭代，上面进行了三次迭代

let i = 3;
while (i){
    alert(i); //只输入一个i代表默认i !=0,即当i变为0时，条件为false，循环终止
    i--;
} //while(i != 0)可简写为while(i)







// 2. do...while循环
// 使用do while可以将 条件检查 移至循环体下面
do {
    // 循环体
} while(condition);

// 实例：
let i = 0;
do {
    alert(i);
    i++;
}while(i < 3); // 这种形式很少使用，除非时不管条件是否为真，循环体至少循环一次才使用do while







// for 循环

//结构
for(begin;condition;step){
    // begin开始循环时执行一次； i = 0
    // condition 每次循环迭代之前检查，如果为false,停止循环； i < 3
    // 循环体，条件为真时重复运行； alert(i)
    // step 每次循环体迭代后执行； i++
}

// 实例：
for (let i = 0; i < 3; i++){ // 这里的变量i在循环中声明，叫做内联变量声明
    alert(i); // 0，1，2
}






// 跳出循环
// 条件为false时，循环终止
//使用break强制退出循环




// 继续下一次迭代：continue
// 它不会停掉整个循环，而是停止当前这一次迭代，并强制启动下一轮循环（条件允许）
// 实例：
for(let i = 0; i < 10; i++){
    if (i % 2 == 0) continue; 能被2整除的都不输出
    alert(i); //1,3,5,7,9
}




//break/continue标签
//从多次循环中跳出来，然而普通的break只会打破内部循环，全跳出来需要使用标签
// 标签：循环前带有冒号的标识符

// 结构：
labelName: for(...){
    ...
}

// 实例：
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // 如果是空字符串或被取消，则中断并跳出这两个循环。
      if (!input) break outer; // (*) // 向上找到outer标签并跳出当前循环
  
      // 用得到的值做些事……
    }
  }
  alert('Done!');


  //break/continue 支持循环前的标签。标签是 break/continue 跳出嵌套循环以转到外部的唯一方法。

