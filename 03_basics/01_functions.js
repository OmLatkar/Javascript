function sayMyName(){
    console.log("Om");
}
sayMyName();

// function addTwoNums(n1,n2){
//     console.log(n1+n2);
// }
function addTwoNums(n1,n2){
    return n1+n2;
}

console.log(addTwoNums(2,4))
console.log(addTwoNums(3,"4"))

function loginUserMessage(username){ //default (username="Sam")
    if(username === undefined){  // or if(!username)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Om"))
console.log(loginUserMessage()) // =>undefined just logged in 


//
function TotalPrice(val1,val2,...num1){   //rest operator
    return num1;
}

console.log(TotalPrice(200,400,500,2000));

const user={
    username:"Om",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray=[200,400,100,600];
function secondValueOfArray(getArray){
    return getArray[1];
}
console.log(secondValueOfArray(myNewArray));