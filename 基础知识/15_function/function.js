// 函数，构建模块，使用多次





// 函数声明：创建函数
function showMessage() {  // 声明 函数名（参数）
    alert('hello world!');  // 函数体
}







// 局部变量
//在函数中声明的变量只能在函数中使用
function showMessage() {
    let message = 'hello, i am javascript!';  // 局部变量：只能在这个函数中使用
    alert(message);
}








// 外部变量(全局变量)
let userName = 'john';

function showName(){
    let message = 'hello' + userName + '!';
    alert(message);
}

// 函数对外部变量拥有全部的访问权限 ，函数也可以修改外部变量
let userAge = 18;

function ageMessage(){
    userAge = 20; // 改变外部变量
    let =message = 'you age is ' + userAge;
    alert(message);
}
alert(userAge); // 18 在函数调用前，函数还未改变变量存储的数据，这时仍是原数据
ageMessage();
alert(userAge); // 20调用函数后，变量的值被函数修改

// 声明了同名变量，外部变量的值会被内部变量覆盖











// 参数： 将任意数据传递给函数
function showMessage(from,text,age = 18){  // age默认值18
    alert(from + ': ' + text);
}
showMessage('jon','boy'); // jon: boy
showMessage('jon'); // jon: undefined  如果没有参数，程序给参数一个默认值undefined












// 返回值：将一个值返回到调用代码中作为结果
function sun(a,b) {
    return a + b;    // 返回a + b 的结果
}
let result = sun(1,2);
alert(result); // 3


// return可以在函数的任意位置。当执行到达时，函数停止，将值返回到调用代码
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('false')
    }
}

let age = prompt('how old are you?',18);


// 空值的return或没有return的函数返回值为undefined
// 不要在return与返回值之间添加新行
// 一个函数一个行为
// 函数 == 注释，函数应该简短且只有一个功能，如果这个函数功能复杂，把他拆成几个函数

