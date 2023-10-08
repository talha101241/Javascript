const Account_ID = 144553;
let Account_Email = "example@gmail.com";
var Account_Password = "12345";
Account_City = "Karachi";
let Account_State;

//Account_ID = 2; // Not Allowed

Account_Email = "xyz@email.com";
Account_Password = "212121";
Account_City = "Hyderabad";

console.log(Account_ID);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/




console.table([Account_ID, Account_Email, Account_Password, Account_Password, Account_City, Account_State]);