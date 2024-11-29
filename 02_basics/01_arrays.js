// non-similar items allowed
//resizable
//copy-shallow copy 
const myArr=[0,1,2,3,4,5]
console.log(myArr[2]);

const arr=new Array(1,2,3,4)
console.log(arr[0]);

//Array Methods

myArr.push(6);
console.log(myArr);
myArr.pop();

myArr.unshift(9)
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(100));

const newArr=myArr.join()

console.log(newArr); // converts into string 

//slice=> myArr.slice(1,3)  => gives subarray(prints index 1 and 2)
//splice=> myArr.splice(1,3) => gives subarray from index 1 to 3 and removes those from original array

console.log(myArr);
console.log(myArr.slice(1,3));
console.log(myArr);
console.log(myArr.splice(1,3));
console.log(myArr);
