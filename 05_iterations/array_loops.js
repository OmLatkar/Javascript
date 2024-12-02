//for of loop=>values
//for in loop=>indices
const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);  
}
for (const i in arr) {
    console.log(i,"-",arr[i]);  
}

const greetings="Hello world!"
for (const i of greetings) {
    console.log(i);
}

//Maps - they are unique
const map=new Map()
map.set('IN', "India")
map.set('AUS', "Australia")
map.set('FR', "France")
console.log(map);

for (const [i,j] of map) {
    console.log(i, ':-', j);
}

const obj = {
    'a':1,
    'b':2,
    'c':3
}
// for (const [i,j] of obj) {
//     console.log(i, ':-', j);   =>  error
// }