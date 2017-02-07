function* makeSimpleGenerator(array) {
    var nextIndex = 0;
    
    while (nextIndex < array.length) {
        yield array[nextIndex++];
    }
}

var generator1 = makeSimpleGenerator(['yo', 'ya']);
function gen1() {
    console.log(generator1.next().value); // 'yo'
    console.log(generator1.next().value); // 'ya'
    console.log(generator1.next().done);  // true
}
function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var generator2 = idMaker();
function gen2() {
    console.log(generator2.next().value); // '0'
    console.log(generator2.next().value); // '1'
    console.log(generator2.next().value); // '2'
}
export {gen1,gen2}