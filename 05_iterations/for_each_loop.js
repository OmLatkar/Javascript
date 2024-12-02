const coding=["js","ruby","java","cpp","python"]

let i="hello "
coding.forEach( function (item) {
    console.log(i+item);
})

coding.forEach( (item) => {
    console.log(item); 
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})

const myCoding = [
    {
        name:"javascript",
        file:'js'
    },
    {
        name:"C++",
        file:'cpp'
    },
    {
        name:"Python",
        file:'py'
    }
]
myCoding.forEach( (item) => {
    console.log(item.name);
} )