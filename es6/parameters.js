function fDefault(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
function fRest(x, ...y) {
  // y is an Array
  return x * y.length;
}
function fSpread(x, y, z) {
  return x + y + z;
}
function setParas() {
    console.log(fDefault(3) == 15);
    console.log(fRest(3, "hello", true) == 6)
// Pass each elem of array as argument
    console.log(fSpread(...[1, 2, 3, 4]) == 6);
}
export default setParas;