// const tinderUser=new Object() //Singleton
const tinderUser={}  //non singleton

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Om",
            lastname:"Latkar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
//.fullname? => if value not present then prevents error

const obj1={
    1:"a", 2:"b"
}
const obj2={
    3:"a", 4:"b"
}

// const obj3={obj1,obj2}

// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Destructuring objects  
const course = {
    coursename:"js youtube",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const{courseInstructor}=course
console.log(courseInstructor);

const{price: cost}=course
console.log(cost);

//API
//JSON contains objects

// {
//     "name":"Om",
//     "coursename":"JS youtube",
//     "price": "free"
// } 

[
    {},
    {},
    {}
]


