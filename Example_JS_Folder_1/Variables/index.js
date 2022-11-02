// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// 1.) declaration (var, let, const) 
// 2.) Assignment ( = assignment operator)


// Datatypes
// Boolean = True or False
// string = string is a series of characters 

let FirstName = "Ktw"; // string  
let age; // or let age = 21; keep in mind that // may be times when you may need to assign a variable and declare a value // or needed accept user input // that would make this was more reliable // cannot use use argithmetic expressions
age = 21; // 21 is a number datatype // can use argithmetic expressions
let student = true // booleans
age = age + 1

console.log(FirstName);
console.log(age);
console.log(student);
// You can add text in console
console.log("Hello", FirstName);
console.log("You are", age, "Years old");
console.log("Enrolled:",student);

// if need to change the inner html of paragraph tags //

document.getElementById("p1").innerHTML = "Hello " + FirstName;
document.getElementById("p1").innerHTML = "you are " + age + " years old";
document.getElementById("p1").innerHTML = "Enrolled: " + student;

