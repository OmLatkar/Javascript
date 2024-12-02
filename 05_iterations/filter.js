const coding=["js","ruby","java","cpp","python"]

//foreach doesnt return a value

const values=coding.forEach( (item) => {
    console.log(item);
    return item;
} )

console.log(values);

const myNums=[1,2,3,4,5,,7,8,9,10]
const nums=myNums.filter( (item) => item>4 )
console.log(nums);

const nums2=myNums.filter( (item) => {
    item>4
} )
console.log(nums2);

const nums3=[1,2,3,4,5,6,7,8]
nums3.forEach( (n) => {
    if(n>4)
        nums3.push(n)
} )
console.log(nums3);

// const userBooks = books.filter( (bk) => bk.genre === 'History' )
// console.log(userBooks)