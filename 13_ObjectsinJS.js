//======================OBJECTS=========================
const c1 =  Symbol("key1")
// console.log(c1);

// Literal Object creation
const jsUser = {
    name : "Rajdwip Ghosh",
    age :22,
    email : "rajdwipghosh@gmail.com",
    isLoggedIn : false,
    lastDays : ["Monday","Sunday"],
    [c1] : "mykey"
}
// console.log(jsUser);

//update the value of object
jsUser.email = "raj23@gmail.com"

// console.log(jsUser);


// Freezing the object cant upadte
// Object.freeze(jsUser)

jsUser.age = 33

// console.log(jsUser);

// Function in object

// jsUser.greeting = function(){
//     console.log("Hello JsUser !!");
    
// }
// console.log(jsUser.greeting);


// jsUser.greeting1 = function(){
//     console.log(`Hello jsUser ,  ${this.email} is`);
    
// }
//  console.log(jsUser.greeting1);


console.log(`Hello jsUser ,  ${this.email} is`);
console.log(jsUser);






