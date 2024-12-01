const user={
    username:"Om",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
    }

}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);

function one(){
    const username="om"
    console.log(this.username);
}
one()

const two=function(){
    let username="om"
    console.log(this.username);
}
two()

const arrfunc=() => {
    let username="om"
    console.log(this.username);
}
arrfunc()

const addTwo = (num1,num2) => {
    return num1+num2
}

//implicit return
const addone = (num1) => (num1+1)
const add3 = (num1) => num1+3

const retobj = (num1) => ({username:"Om"})
console.log(retobj(3));

