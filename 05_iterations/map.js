const arr=[1,2,3,4,5,6,7,8,9,10]
const arr2=arr.map( (num) => num+10 )
console.log(arr2);

const arr3=arr
.map( (num) => num*10 )
.map( (num) => num+2 )
.filter((num) => num>40)
console.log(arr3);
