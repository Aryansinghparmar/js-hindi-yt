// Dates

let myDate = new Date()
// console.log(myDate.toString());// Wed Jun 19 2024 10:31:08 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());// Wed Jun 19 2024
// console.log(myDate.toLocaleString());// 6/19/2024, 10:31:08 AM
// console.log(myDate.toISOString());// 2024-06-19T10:33:50.323Z
// console.log(myDate.toJSON());// 2024-06-19T10:35:03.260Z
// console.log(myDate.toLocaleDateString());// 6/19/2024
// console.log(myDate.toLocaleTimeString());// 10:38:47 AM  
// console.log(myDate.toTimeString());// 10:41:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());// Wed, 19 Jun 2024 10:42:43 GMT
// console.log(typeof myDate);// object

// let myCreatedDate = new Date(2024, 0, 24)
// let myCreatedDate = new Date(2024, 0, 24, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
 
// `${newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long",
  
})