// Primitiv and Non Primitive data types
// 1. Primitive DataTypes
// catagory 7 // 1. String  2. Number , 3.Boolean ,4. null , 5.undefined , 6.Symbol , 7.BigInt
// Js is a Dynamically Typed Language 

// 2. Reference Type or Non Primitive DataTypes
// types : Arrays, Objects , Functions

const score = 100
// console.log(score);

const scoreValue = 100.04
// console.log(scoreValue);

const isLoggedin = false
// console.log(isLoggedin);

const outsideTemp = null // Completely Empty

// console.log(outsideTemp);

let userEmail;
// console.log(userEmail);

//Symbols  ------------------>

const id = Symbol('123')
const annotherId = Symbol('123')
// console.log(id == annotherId);

const bigNumber = 234859458759678n
// console.log(typeof(bigNumber));

//Arrays --------->

const cars = ["BMW","Jaguar","Marcidis","Toyota" ,"Honda","Ford"];

// Objects ----------------->
 let myObj = {
    name: "Rajdwip"
    // age:22,

}

// console.log(cars[1]);

// Functions -------->

const myFunction = function(){
    console.log("Rajdwip Ghosh");
}

// To Find Datatypes 
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);


console.log(typeof myObj);
console.log(typeof cars);
console.log(typeof myFunction);

















