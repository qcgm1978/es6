// ES6正是为了解决这个问题才提供了Map结构。它类似与对象，也是键值对集合，但是”键”的范围不限于字符串，对象也可以当作键。

var m = new Map();
let o = {p: "hello world"};

m.set(o, "content");
function getMapProp() {
    console.log(m.get(o));  // content
}
export default getMapProp