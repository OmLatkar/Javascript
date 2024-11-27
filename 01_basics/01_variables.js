const accountId = 144553
let accountEmail = "omlatkar123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

/*
Do not use var because of 
block scope and functional scope
*/

// accountId = 2   //Not allowed
accountEmail="abc@gmail.com"
accountPassword="1234321"
accountCity="Pune"
// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])