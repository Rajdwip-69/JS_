// Basic Structure of Function
function myfun(){
    console.log("Hello Rajdwip");
    
}

// myfun()

// Value pass by argument======
function addTwoNums(num1,num2){
    // let num3 = num1 + num2
    // return num3
    return num1 + num2
}

let res = addTwoNums(3,5)
// console.log("Result is :",res);


// function loginMessege(username){
//     return  `${username} Sucessfully Logged in:`
// }
// console.log(loginMessege("Rajdwip"));

// Set Default value in the parameter
function loginMessege(username ="sam"){
    return  `${username} Sucessfully Logged in:`
}
// console.log(loginMessege());

// check user name is valid or not 

function loginMessege(username){
    if(username === undefined){
        console.log("Enter a Valid User name");
        return
        
    }
    return  `${username} Sucessfully Logged in:`
}
// console.log(loginMessege("Rajdwip"));



function loginMessege(username = "Ram"){
    if(username === undefined){
        console.log("Enter a Valid User name");
        return
        
    }
    return  `${username} Sucessfully Logged in:`
}
console.log(loginMessege());




