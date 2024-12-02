// const email="om@ai"
// const email=""
const email=[]
if(email)
{
    console.log("Got email");
}
else
{
    console.log("Dont have email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, non-empty String, [], {}, function(){}, non-zero number

// check if array is empty or not-
// arr.length===0

// check if object is empty or not-
// if(Object.keys(obj).length===0)

// Nullish Coalescing Operator(??) : null undefined
//if null or undefined then backup value, else first value
//safety check
let val1,val2;
val1=5 ?? 10
val2=null ?? 6
console.log(val1);
console.log(val2);

console.log(3>5 ? 3:5); // ternary operator

