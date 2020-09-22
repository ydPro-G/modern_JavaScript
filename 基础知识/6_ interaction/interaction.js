// 与用户交互的函数:alert,prompt,confirm

//alert:显示消息
//显示一条消息，等待用户按下ok
alert("good");


// prompt:显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 null。
//接受两个参数，一个是给用户看的文本框，第二个是可选的参数
let age = prompt('how old are you?',100); // 100可以改变
alert(`YOU ARE ${age} years old`);  // age的值是用户输入的值,100或者其他


// confirm:显示信息等待用户点击确定或取消。点击确定返回 true，点击取消或按下 Esc 键返回 false。
//带有question以及确定和取消两个按钮，点击确定返回true，点击取消返回flase
let is_boss = confirm('he is your boss?')
alert(is_boss); // 点确定yes，否false