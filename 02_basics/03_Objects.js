// singleton
// Object.create

// object literals

const mySym = Symbol("key1") 


const Jsuser = {
    name: "Aryan",
    "full name": "Aryan Singh Parmar",
   [mySym]: "mykey1",
    age: 19,
    location: "Patna",
    email: "aaryansingh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "aaryan@anime.com"
// Object.freeze(Jsuser)
Jsuser.email = "aaryan@berserk.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
} 

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());



