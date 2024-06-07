//Primitive

// 7 types : string,Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

const bigNumber = 345568712397654443456778788n

// Reference (Non primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name : "aryan",
    age : 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber );