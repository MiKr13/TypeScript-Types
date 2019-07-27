// NOTE Run coresponding JS file by nodemon Hello.js, use Comment Anchor in VS code, also, watch this file with tsc -w Hello.ts

// ANCHOR boolean
let isTrue: boolean = false;

console.log(`Eminem is God?\nAns ${isTrue}`);

// ANCHOR number
const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(5, 10));

// ANCHOR string
let eyeColor: string = `I'm the almighty and everything I say is ${!isTrue}`;

console.log(eyeColor);

// ANCHOR array
let animalArr: string[] = ['cat', 'dog', 'weasle'];
// a better distintive way
let animalArr2: Array<String> = ['cat', 'dog', 'weasle']

console.log(`${animalArr[2]} & ${animalArr2[2]} are same?\nAns: ${animalArr[2] === animalArr2[2]}`);

// ANCHOR undefined and null
let unknown: undefined = undefined;
let empty: null = null;
console.log(`${unknown} and ${empty}`);

// ANCHOR tuple
let basket: [string, number] = ['basketball', 11];

console.log(basket);

// ANCHOR enum
enum Prize { Gold = 1, Silver = 2, Bronze = 3 };
let first: string = Prize[1];
let topOne: number = Prize.Gold

console.log(`${first} for rank '${topOne}' position`);

// ANCHOR any (not recommended but has some use cases like server output or user input)
let balasphamy: any = "When you first saw Halo, were you blinded by it's majesty?"
console.log(balasphamy);
balasphamy = true;
console.log(`Ans: ${balasphamy ? 'Yes Noble Hierarch' : 'No it was shit filled dumpster'}`);

// ANCHOR void
const johnSnow = (): void => {
    console.log("You know nothing John Snow and btw stop with that 'She is my queen' crap");
}

johnSnow();

// ANCHOR never (for functions with no reachable end points i.e. never returns or for a varible that under some type guard never becomes true)
const error = (): never => {
    throw Error('All you had to do was follow the damn train CJ');
}

// error();

// ANCHOR interface
interface RobotArmy {
    count: number;
    type: string;
    special: string;
}

let army = (props: RobotArmy): void => {
    console.log(props);
}

let elvs: RobotArmy = {
    count: 100,
    type: 'elv',
    special: 'huge ears and immortal'
}

army(elvs);

// ANCHOR objects
const anything = {
    key1: 'Burn',
    key2: 'them',
    key3(): string {
        return `${this.key1} ${this.key2} all`;
    },
    key4: ["yo", "paizan"]
};

console.log(anything.key3());

const person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: () => { }  // NOTE Type template
}

// person.sayHello = () => console.log(`Hello ${person.firstName} ${person.lastName}`); // for different approach
person.sayHello = () => `Hello ${person.firstName} ${person.lastName}`;

// person.sayHello();

const getInFight = (obj: { firstName: string, lastName: string, sayHello: () => void }) => { // NOTE object as parameter
    // console.log(`Hey ${obj.firstName} ${obj.lastName}, you got your ass caped in Saving Private Ryan!`)
    console.log(`Hey ${obj.firstName} ${obj.lastName}, over here...... (Runs to him)\n${obj.sayHello()} you got your ass caped in Saving Private Ryan!`)
}

getInFight(person);