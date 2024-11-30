//singleton

//Object.create - constructor method

const mySym=Symbol("key1")

const JsUser = {
    name: "Om",
    age: 20,
    location: "Pune",
    email: "1234@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "mykey1"
}

console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser[mySym]);

JsUser.email = "abc@gmail.com"

// Object.freeze(JsUser); // changes not allowed

JsUser.greeting=function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
