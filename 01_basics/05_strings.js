const name = "aryan"
const repoCount = 50

// console.log(name + repoCount +" value" );

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aryan-gc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, -4)
console.log(anotherString);

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aryan.com/aryan%20singh"

console.log(url.replace('%20' , '-'))

console.log(url.includes('uchiha'));

console.log(gameName.split('-'));

const str1 = 'aaryan';
const str2 = 'parmar';

console.log(str1.concat(' ', str2));

