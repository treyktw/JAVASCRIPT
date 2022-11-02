// Type Conversion = change the datatype of a value to another
//                   (strings, number, booleans)

let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age); // number constructor // convert string to a number
console.log(typeof age);
age += 1;


console.log('Happy Birthday ! You are', age , "years old");

let x;
let y;
let z;

x = Number("3.14"); // trying to convert something that is not a number will result in NaN // Not a Number
y = String(3.14);
z= Boolean("0"); // leaving the boolean empty will result in false // putting anything into the boolean will make it true // 
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


