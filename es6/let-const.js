function letVar() {
    varTest();
    letTest();
    function varTest() {
        var x = 1;
        if (true) {
            var x = 2;  // same variable!
            console.log(x);  // 2
        }
        console.log(x);  // 2
    }
    
    function letTest() {
        let x = 1;
        if (true) {
            let x = 2;  // different variable
            console.log(x);  // 2
        }
        console.log(x);  // 1
    }
}
function constant() {
    // define MY_FAV as a constant and give it the value 7
    const MY_FAV = 7;
// this will throw an error
//     MY_FAV = 20;
// will print 7
    console.log('my favorite number is: ' + MY_FAV);
}
export  {letVar,constant}