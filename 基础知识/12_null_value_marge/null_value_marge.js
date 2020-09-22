// 空值合并运算符

// ?? 获取列表中第一个 已定义 的值
let f_name = null;
    l_name = undefined;
    nick_name = 'superman';

alert(f_name ?? l_name ?? nick_name ?? 'low')  // 显示 superman



// ??与||比较
// ||返回第一个真值   ?? 返回第一个已定义的值
let height = 0;
alert(height || 100); // 100， 因为0与null，undefined是假值对待，输出第一个真值100
alert(height ?? 100); // 0 输出第一个已定义的值0



// ？？优先级比较低，要使用需要加()

// 禁止??与&&  || 同时使用


// 总结：
//提供一种简洁的方式获取列表中已定义的值
//被用来为变量分配默认值，当witch值为null或undefined时，将height值设置为100
let width;
width = width ?? 100; // width =100

//?? 运算符的优先级非常低，只略高于 ? 和 =
//如果没有明确添加括号，不能将其与 || 或 && 一起使用