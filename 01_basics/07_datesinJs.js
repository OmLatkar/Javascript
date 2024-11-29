let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
//Date is an object
let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
let d=new Date(2023,0,23,5,3);
console.log(d.toLocaleString());
//new Date("2023-01-14")=>January
//new Date("01-14-2023")

let myTimeStamp = Date.now()  //in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})