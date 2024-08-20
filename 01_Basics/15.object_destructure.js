
//=================Object Destructure========================
const course = {
    name : "JS",
    mentor : "Hitesh",
    price : "999"
}

const {name} = course
console.log(name);


const {price} = course 
console.log(price);

const {mentor:m} = course
console.log(m);



