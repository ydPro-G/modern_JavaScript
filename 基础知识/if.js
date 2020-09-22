// if语句
// if else 
// else if
//  ?和if作用差不多



// 注意坑：
// 数字0，空字符串""，null,undefined和NaN都会被转换为false
if(0) { // 这个判断永远不会执行，因为前置条件为flase
    ...
}

if("0"){ // 这个会执行，因为0是字符串0
    ..
}




// 使用？ 重写if..else语句
let message;

if (login == 'Employee') {
    message = 'Hello';
  } else if (login == 'Director') {
    message = 'Greetings';
  } else if (login == '') {
    message = 'No login';
  } else {
    message = '';
  }

  // ?重写
  let message = (login == 'Employee') ? 'hello':
  