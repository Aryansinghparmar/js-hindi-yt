// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "hellow world!"
for (const greet of greetings) {
  //  console.log(`eacg cgaer is ${greet}`);
}


// Maps


const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':-', value); 
}

const myObject = {
    game1 : 'NFS',
    game2 : 'spiderman'
}

// for (const [key] of myObject) {
//     console.log(key, ':-', value); 

// }