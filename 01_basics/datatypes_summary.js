//Primitive
//(call by value)
// 7 types:String, Number, Boolean, null, undefined, Symbol, BigInt

// const id=Symbol('123')
// const id2=Symbol('123')
// console.log(id==id2); //=>false
// const bigNumber=3453463434744447n //(BigInt)

// Reference (Non primitive)
// Array, Objects, Functions

// Array
// const heroes=["shaktiman","naagraj","doga"];
// object
// let myObj={
//     name:"Om",
//     age:20,
// }
// function
// const myFunction=function(){
//     console.log("Hello World");
// }

// Memory

// Stack-Primitive (Soft copy), Heap-Non primitive (Hard copy)

let x="Om"
let y=x;
y+=" Latkar"
console.log(x);
console.log(y);

let user1={
    email: "abc@gmail.com",
    upi:"abc@ybl"
}

let user2=user1
user2.email="def@gmail.com"
console.log(user1);
console.log(user2);



