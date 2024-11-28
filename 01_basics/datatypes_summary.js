//Primitive
//(call by value)
7 types:String, Number, Boolean, null, undefined, Symbol, BigInt

const id=Symbol('123')
const id2=Symbol('123')
console.log(id==id2); //=>false
const bigNumber=3453463434744447n //(BigInt)

Reference (Non primitive)
Array, Objects, Functions

Array
const heroes=["shaktiman","naagraj","doga"];
object
let myObj={
    name:"Om",
    age:20,
}
function
const myFunction=function(){
    console.log("Hello World");
}