// Arrows are a function shorthand using the => syntax. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript. They support both statement block bodies as well as expression bodies which return the value of the expression. Unlike functions, arrows share the same lexical this as their surrounding code.
// Expression bodies
let evens = [1, 2, 3]
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
function expressionBody() {
    console.log(odds, nums, pairs);
}
// Statement bodies
let fives = []
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});
// Lexical this
var bob = {
    _name: "Bob",
    _friends: ['Dylan'],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    },
    printFriends1: function () {
        let that = this;
        this._friends.forEach(function (f) {
            console.log(that._name + " knows " + f)
        });
    }
}
export default expressionBody;