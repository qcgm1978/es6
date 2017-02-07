var a = {name: 'lucy'};
a.name = 'lili';// 这样就会重写属性
//how to avoid rewrite properties
var a = {};
var symbol = Symbol('name');
a[symbol] = 'lucy'
var symbol = Symbol('name');
a[symbol] = 'lili';
export default a
