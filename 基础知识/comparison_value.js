// 比较值

// 1. 比较运算符：>,<,>=,<=,==,!=


// 2. 比较结果为boolean类型
alert( 2 > 1); // true 正确
alert( 2 == 1); // false
alert(2 != 1); // true



// ==  与 === 的区别
alert( 0 == false); // true
alert( 0 === false); // false

// 为什么会出现这种情况呢？因为==在比较不同类型值的时候，会做类型转换，而===不会做类型转换
// 所以===被称为严格比较，和python的== 差不多





// 要注意的坑null和undefined
// 尽量不要让这两个值与其他值比较
//在非严格相等 == 下，null 和 undefined 相等且各自不等于任何其他的值。
//在使用 > 或 < 进行比较时，需要注意变量可能为 null/undefined 的情况。比较好的方法是单独检查变量是否等于 null/undefined。