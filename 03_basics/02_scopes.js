if(true)
{
    let a=10
    const b=20
    var c=30
}

console.log(c);

function one(){
    const username="Om"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); =>error
    two();
}
one();
// two(); =>error

if(true)
{
    const a="om"
    if(a==="om"){
        const b=" youtube"
        console.log(a+b);
    }
}

console.log(addone(5));
// console.log(addTwo(4)); => error



function addone(num){
    return num+1
}

const addTwo=function(num){
    return num+2;
}

console.log(addTwo(4));
