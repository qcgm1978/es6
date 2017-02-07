var myArray=[1,2,3];
//不够简洁
for (var index = 0; index < myArray.length; index++) {
    // console.log(myArray[index]);
}
myArray.forEach(function (value) {
    // console.log(value);
    if(value==1){
        //error
        // break;
        //not stop
        // return;
    }
 });
myArray.name='myArray';
//name property will be viewed
for (var index in myArray) {     // don't actually do this
  
    // console.log(myArray[index]);
}
function forOfLoop() {
    for (var value of myArray) {
        console.log(value);
        if (value === 1) {
            // break;
            return;
        }
    }
}
export default forOfLoop