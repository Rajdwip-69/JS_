// ==============SINGELTON METHOD ==========================
const tinderUser = new Object()

// const tinderUser = {

// } 

tinderUser.id = "123abc"
tinderUser.name = "Rajdwip"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "raj@gmail.com",
    fullNmae : { 
         userName : {
            firstName : "Rajdwip",
            lastName : "Ghosh"
         }
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullNmae.lastName.firstName);

//===========Merge Object ================================

const obj1 = {1:"a",
              2:"b",
              3:"c"

}
const obj2 = {
           4: "d",
           5 : "e",
           6: "f"
}

const obj3 = {...obj1,...obj2}
// console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
// console.log(Object.length(obj1));
console.log(Object.entries(obj1));


