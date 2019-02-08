// STEP 1
/*
var someMonth;
function theMonth();
var currentMonth;
var summerMonth;
var myLibraryFunction;
*/

// STEP 2
/*
10; // a numeric literal expression
"Hello!"; // a string literal expression
true;
false; // Boolean literal expressions
null // a null literal expression
*/

// STEP 3
// Two examples of complex / variable expressions
/*
var x = 5
var y = "3 * (4 / 5) + 6";
*/

// STEP 4 Declare 9 variables
// Use Camel Casing and Hungarian Notation when naming your identifiers.

/*
var firstName;
var lastName;
var address;
var city;
var state;
var zipCode;
var yourAge;
var referralSource;
var mayWeContactYou;

var strFirstName;
var strLastName;
var strAddress;
var strCity;
var strState;
var numZipCode;
var numYourAge;
var strReferralSource;
var boolMayWeContactYou;
*/

// STEP 5
/*
strFirstName = "Annie";
strLastName = "Ly";
strAddress = "123 Lane Rd";
var strCity = "San Diego";
var strState = "California";
const zipCode = 92123;
const yourAge = 21;
*/

// STEP 6
//Create a variable. 
//Add a number and a string and display the coerced result in the browser’s console //window.
/*
var x;
x = 1 + " dog(s)";
console.log(x);
*/

// STEP 7
//Create two variables. 
//For the first variable, add a Boolean and a string and display the coerced //result. For the second variable, add a number and a Boolean and display the //coerced result. 
/*
var x;
var y;
var x = true + " big doggy";
console.log(x);
var y  = 3 + false;
console.log(y);
*/

// STEP 8

/*
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I;
someString +="'m not sure about the former."';
window.console.log(someString);
*/

// STEP 9
//Create a variable that produces a null value in the console window. 
//Create a variable that produces an undefined value in the console window.
/*
var x = null;
console.log(x);
var z;
console.log(z);
*/

// STEP 10
//Use the typeof operator on various literals to return the following types within //the console window: string, number, Boolean, object, and undefined.
/*
console.log(typeof("Something in the string.));
console.log(typeof(3));
console.log(typeof(true));
var candy = {type="chocolate", flavor="toffee"};
console.log(typeof(candy):)
var z;
console.log(typeof(z));
*/

// STEP 11
//Substitute my name for your name. Although not necessary in practice, I want you //to use 2 concatenation operators to construct this string of text. One after the //text “Hello” and a second one after your name and before the comma.
/*
var fullName = "Annie Ly";
var classType = "JavaScript";
alert("Hello " + name + ", Welcome to the " + classType + " class!");
*/

// STEP12
//Declare a variable called name and set it equal to your name. 
//Substitute your name in the previous alert string with the variable instead.
/*
var name = "Annie Ly";
var classType = "JavaScript";
alert("Hello " + name + ", Welcome to the " + classType + " class!");
*/

// STEP 13
//Declare a variable called course and set it equal to “JavaScript”. 
//Rework your alert string so that it displays the string of text but using the //variables as opposed to hard coded text.
/*
var name = "Annie Ly";
var course = "JavaScript";
alert("Hello " + name + ", Welcome to the " + course + " class!");
*/

// STEP 14
//Rework the above string so that a line break is added right before “Welcome”.
/*
var name = "Annie Ly";
var classType = "JavaScript";
alert("Hello " + name + "," + "\n" + "Welcome to the " + classType + " class!");
*/

// STEP 15 + STEP 16
/*
var name = prompt("What's your name?");
var classType = prompt("What class are you taking?");
alert("Hello " + name + "," + "\n" + "Welcome to the " + classType + " class!");
*/

// STEP 17
//Assign the value 10 to x on a new line. 
//Assign the value 20 to y on a new line. 
//Display the sum of those two numbers in the console window.
/*
var x = 10;
var y = 20;
console.log(x + y);
*/

// STEP 18
//Declare a variable called x and assign it a value of 20. 
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.
/*
var x = 20;
x += 20;
console.log(x);
*/

// STEP 19
//Declare a variable called x and assign it a value of 20. Multiply and assign 5 to //that variable and display the result in the console window.The result should be //100.
/*
var x = 20;
x *= 5;
console.log(x);
*/

// STEP 20 Declare a variable called x and assign it a value that equals the //remainder of 20 divided by 3. Divide and assign 1 to that variable and display //the result in the console window. The result should be 2.
/*
var x = 20 % 3;
x /= 1;
console.log(x);
*/

// STEP 21 Using a set of Comparison and Logical operators, write an application //that evaluates to true and displays the result within the console window.
/*
var x = 3;
console.log(Boolean(x==3));
*/

// STEP 22
//Using a set of Comparison and Logical operators, write an application that //evaluates to false and displays the result within the console window. The //application cannot use the same operators used in the previous application.
/*
var x = 3;
console.log(Boolean(x != 3));
*/

// STEP 23 Use new operator to create a new Object called “widget”. Within the //console window, use typeof operator to display the type of variable widget is.
/*
var widget = new Object;
console.log(typeof(widget));
*/

// STEP 24 Using the instanceof operator, write an application that returns true //within the console window if the widget variable is an instance of an object.
/*
var widget = new Object;
console.log(widget instanceof Object);
*/

// STEP 25 Without modifying the variable declaration and assignment, rewrite the //previous application so that it returns false.
/*
var widget = new Object;
console.log(widget instanceof String);
*/