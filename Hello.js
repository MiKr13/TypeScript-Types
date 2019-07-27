// NOTE Run coresponding JS file by nodemon Hello.js, use Comment Anchor in VS code, also, watch this file with tsc -w Hello.ts
// ANCHOR boolean
var isTrue = false;
console.log("Eminem is God?\nAns " + isTrue);
// ANCHOR number
var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 10));
// ANCHOR string
var eyeColor = "I'm the almighty and everything I say is " + !isTrue;
console.log(eyeColor);
// ANCHOR array
var animalArr = ['cat', 'dog', 'weasle'];
// a better distintive way
var animalArr2 = ['cat', 'dog', 'weasle'];
console.log(animalArr[2] + " & " + animalArr2[2] + " are same?\nAns: " + (animalArr[2] === animalArr2[2]));
// ANCHOR undefined and null
var unknown = undefined;
var empty = null;
console.log(unknown + " and " + empty);
// ANCHOR tuple
var basket = ['basketball', 11];
console.log(basket);
// ANCHOR enum
var Prize;
(function (Prize) {
    Prize[Prize["Gold"] = 1] = "Gold";
    Prize[Prize["Silver"] = 2] = "Silver";
    Prize[Prize["Bronze"] = 3] = "Bronze";
})(Prize || (Prize = {}));
;
var first = Prize[1];
var topOne = Prize.Gold;
console.log(first + " for rank '" + topOne + "' position");
// ANCHOR any (not recommended but has some use cases like server output or user input)
var balasphamy = "When you first saw Halo, were you blinded by it's majesty?";
console.log(balasphamy);
balasphamy = true;
console.log("Ans: " + (balasphamy ? 'Yes Noble Hierarch' : 'No it was shit filled dumpster'));
// ANCHOR void
var johnSnow = function () {
    console.log("You know nothing John Snow and btw stop with that 'She is my queen' crap");
};
johnSnow();
// ANCHOR never (for functions with no reachable end points i.e. never returns or for a varible that under some type guard never becomes true)
var error = function () {
    throw Error('All you had to do was follow the damn train CJ');
};
var army = function (props) {
    console.log(props);
};
var elvs = {
    count: 100,
    type: 'elv',
    special: 'huge ears and immortal'
};
army(elvs);
// ANCHOR objects
var anything = {
    key1: 'Burn',
    key2: 'them',
    key3: function () {
        return this.key1 + " " + this.key2 + " all";
    },
    key4: ["yo", "paizan"]
};
console.log(anything.key3());
var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { } // NOTE Type template
};
// person.sayHello = () => console.log(`Hello ${person.firstName} ${person.lastName}`); // for different approach
person.sayHello = function () { return "Hello " + person.firstName + " " + person.lastName; };
// person.sayHello();
var getInFight = function (obj) {
    // console.log(`Hey ${obj.firstName} ${obj.lastName}, you got your ass caped in Saving Private Ryan!`)
    console.log("Hey " + obj.firstName + " " + obj.lastName + ", over here...... (Runs to him)\n" + obj.sayHello() + " you got your ass caped in Saving Private Ryan!");
};
getInFight(person);
