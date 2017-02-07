var foo = { bar: 'bar' }

var bar='bar';
var foo1 = { bar }
function setProp() {
    console.log(foo.bar)    // 'bar'
    console.log(foo1.bar)    // 'bar'
}
function destructAssign() {
    let myObject = {foo2: 2, baz: 'baz'}
    let {foo2, baz} = myObject;
    console.log(foo2,baz)
}
export  {setProp,destructAssign};