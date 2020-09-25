// switch语句
//替代多个if判断

// 语法
// switch语句至少有一个case代码块，和一个可选的default代码块
// 实例：从第一个case分支开始将a的值与case的值比较，比较成功后执行break
let a = 2 + 2;

switch(a){
    case(3):   // if(a === '3')
    alert("too small"); // 如果a等于3运行这一行代码
    break;  // 退出循环

    case(4): if(a === "4")
    alert("yes!");  
    // yes!
    break;
    //如果没有break就一直执行  好傻

    default:
        alert("i do not konw suchvalues!")
}





// switch和case允许任意表达式
let a = "1";
let b = 0;
switch (+a) { // + 将字符串转化为数学计算
    case b + 1:  // 1与1比较
        alert("yes!")
        break;

    default:
        alert("no!")
}




// case 分组
// 共享同一段代码的几个case分支可以被分为一组
// 让case3和case5执行同样的代码
let a = 3;

switch(a){
    case 4:
    alert("mo");
    break;

    case 3: // （*）下面两个case被分为一组
    case 5:
        alert("wrong!");
        alert('yes!');
        break;   // switch/case有通过case进行分组的能力，其实是switch语句没有break的副作用，
                //  没有break，case 3 会从(*)执行到case5
    
    default:
        alert("yes or no!");

}


// 类型很重要
// switch和case之间是严格相等
// switch用if写，为了精确实现switch功能，if必须用严格相等
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

  if(browser === 'Edge') {
      alert("you are got the Edge!");
  }else if (browser === 'Chrome'
  || browser === 'FireFox'
  || browser === 'A'
  || browser === 'B'){
      alert('yes')
  }else {
      alert('no')
  }