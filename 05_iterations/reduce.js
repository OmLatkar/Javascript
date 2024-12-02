const arr=[1,2,3,4,5]

const initial_value=0

const myTotal=arr.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval 
},0)

console.log(myTotal);


const aggregate=arr.reduce(
    (accumulator, currentValue) => accumulator+currentValue, initial_value
)

console.log(aggregate);


const shoppingCart=[
    {
        name:"js course",
        price:299
    },
    {
        name:"python course",
        price:999
    },
    {
        name:"dev course",
        price:599
    },
    {
        name:"data science course",
        price:9999
    },
]

const total_price=shoppingCart.reduce((acc, item)=>(acc + item.price),0)
console.log(total_price)