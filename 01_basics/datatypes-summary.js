//Primitive

// 7 types : string,Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3//dattype=number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')//datatype=symbol

// console.log(id === anotherId );

const bigNumber = 345568712397654443456778788n// bigNumber datatype->bigint

// Reference (Non primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]//heros -> datatype=object
let myobj = {
    name : "aryan",
    age : 20,
}

const myFunction = function(){
    console.log("hello world");//datatype=function
}

// console.log(typeof  anotherId );


// ++++++++++++++++++++++++++++++++++++++++

// stack (Primitive),heap (Non-Primitive)

let myYoutubename = "aryansinghparmar"

let anothername = myYoutubename
anothername ="aaryansingh.777"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aryan@google.com"

console.log(userOne.email);
console.log(userTwo.email);



