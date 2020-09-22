// 变量
// let 关键字声明
 // 例子：
 let message; // 定义一个全局变量
 message = 'hello'; // 赋值，这个字符串保存到这个变量相关联的内存区域了，当声明变量时，变量自动分配一块内存区域，之后的修改只是修改这个内存区域保存的数据罢了
 alert(message); // 使用这个变量
 let message = 'hello'; //这就是变量提升。。提出这个提法的真实有够无聊的

 // 声明多个变量
 let user = 'john',
     age = 15,
     message = 'he is bedboy';

// 声明常量(不变=元组)，使用const
const MY_CONST = 18.11;  //const声明不能修改，一边用大写来写


// 拷贝变量；变量 = 变量 拷贝


// 注意：
// 1.一个变量重复声明会触发error
let a = 'a';
let a = 'b'; //error


// 2.var 也能声明变量，但是和let有些许不同，整体来说就是let更规范了，var就是喝醉了敷衍的产品
// 3.不能用数字开头，区分大小写，js使用的字符不能用作变量命名

