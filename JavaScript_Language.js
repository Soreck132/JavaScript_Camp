
// #################### 2.- Variables and types ################

// 2.1 Declaring and Assigning variables

    /*a variable as a box with a label on it. We can label the box whatever we want and put pretty much anything we want into the box and we end up with a convenient way to refer to some data.*/

var x = 32;
var WhereamI = "Aguascalientes"
x = 36;

var var1 = 1, var2 = 2, var3 = 3;

// 2.2 Strings
    /* A string is character data. That means things like sentences, words, single letters*/

"strings are text contained between single quotes or doble quotes"
"if you place numbers between the single or double quotes can be consider as string"    

"this is a way to escaping the string \"favorite\" "

// 2.3 String properties and methodes

    /* A property is a single piece of data, like the length of a string, and a method is a bit of code to do something more involved, like convert a string to uppercase.*/

var string = "this is a variable string which contained text";

string.length //properties and methodes comes out after the dot from a variable.

// 2.4 Numbers

var num1 = 33;

    /*By typing Math. then tab key it'll show all the methodes associated to numbers and mathematical.*/

// 2.5 Booleans for what is true

    /* we're going to talk about booleans, that is true and false and why booleans matter to us. You may know from the way people talk about computers, sort of colloquially, that computers deal with ones and zeros, on and off, true and false, that sort of dichotomy. Boolean is a data type that can capture true or false for us. In JavaScript, a boolean is either true, spelled this way, or false, spelled this way.*/

var loc1 = 5, loc2 = 8
loc1 === loc2
    // > var loc1 = 5, loc2 = 8
    // undefined
    // > loc1 === loc2
    // false
    // > var loc2 = 5
    // undefined
    // > loc1 === loc2
    // true

// 2.6 Variable mutability

        /*Declaring a variable with VAR yields a variable whose value can be changed later. But there are times in our code where we'd like to have variables that can be set once, but never changed later. If we want to represent facts, like the birthdays of family members or how many items are in a dozen, you wouldn't want those facts to be changed later accidentally. In situations like this, we want to create constants. A constant is an immutable variable.*/
    
const dozen = 12, halfDozen = 6, bakersDozen = 13;

dozen = 13;

var cookieCount = 5;
let cookieCount = 5;    

// #################### 3.- Objects, Arrays and more ################

//3.1 Objects

        /*Objects are defined by {} and what is into it is call properties which can contained any value following the below structure*/
    
{ }

var emptyObject = {};
emptyObject;

var notEmptyObject = {
  label: "value",
  label2: "value2",
};
notEmptyObject;

//3.2 Using objects for data modeling

let phone = {
    color: "white",
    shape: "square",
    cameras: 2,
    model: 11,
    capacity: "64gb"
};  //all data contained between the curly brackets are object properties and must need defined under the given structure.

//3.3 Manipulating objects

    /*To manipulate objects propeties we will need to type the object name follow by a dot then the property name the update the property value as shown below.*/

phone.model = 12 // to modify an object property
phone.case = "leather brown" // to add an object property
delete phone.capacity // to delete an object property

 phone
{
  color: 'white',
  shape: 'square',
  cameras: 2,
  model: 12,
  case: 'leather brown'
}

//3.4 Jargon: References

        /*When referencing between one object to another properties can be updated in one property and reflect into the referenced one*/

> var iphone = phone
undefined
> iphone.color = "black"
'black'
> iphone
{
  color: 'black',
  shape: 'square',
  cameras: 2,
  model: 12,
  case: 'leather brown'
}

//3.5 Arrays

        /*Arrays are list of data that can contain objects, arrays, or any other data formated as list*/

var week = ["sun", "mon", "tue"]
var list = [[1,2,3],{object: "property"},1, 2,3]

//3.6 Manipulating Arrays

var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

counties[0];
counties[2];

counties[2] = "Cheshire"; //Updates the value given at the position in the array
counties;

counties[4] = "Carroll"; // if known place an item at the position given 
counties;

counties[counties.length] = "Merrimack"; 
counties;

counties.push("Coos"); // Updates the list by placing values at the end of a list
counties;

counties.pop();

delete counties[2]; // Deletes the content of a item from the list
counties;

counties.splice(2, 1); // Replaces the content of a empty item
counties;
counties.length;

//3.7 Readability: Whitespace
//3.8 Readability: Comments
//3.9 Regular Expresions

        /*A and ends with S. A regular expression is a way to describe something that you're searching for with an abstract pattern.*/
    
var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var search = /man/; //this will defined the variable to search a particular value acording to the structure

search.test(string1); //when running this line, it'll find all the coincidences of the given text into the variable string1.
search.test(string2);
search.test(string3);
search.test(string4);

search = /man/i; //will look for text and case sentive.

search = /^man/i;

search = /man$/i;

search = /ever.$/i;

search = /ever\.$/i;        


// #################### 4.- Operators and Control Structures ################

//4.1 Simple Comparisons

var one = 1,
  two = 2;

one === one; // true
one !== one; // false
one !== two; // true
one === two; // false

one == one; // true
one == "1"; // true (?!)
one != "1"; // false (?!)
one === "1"; // false

one < two; // true

one > two; // false

one <= two; // true

one <= one; // true

one >= two; // false

10 >= two; // true

//4.2 Arithmetic operators

2 + 5;
4 - 3;
5 - 9;
3 * 5;
36 / 6;
36 / 5;

20 % 2;
19 % 2;

// twenty an even number?
20 % 2 === 0; // true

const perPage = 20;
const totalResults = 254;
totalResults % perPage;

var counter = 0;
counter = counter + 1;

counter += 1;
counter++;

counter += 5;
counter += -4;

counter -= 1;
counter--;
counter;

counter *= 2;

"cat" + "dog";
"cat " + "dog";
"cat" + " and " + "dog";

"1" + "2";

//4.3 Logical operators

        /* || double pipe indicates a 'or' logical operator
            && double and indicates a 'and' logical operator
            !true !false indicates a 'bang' unverts the output from positive to negative 
            () this parenthesis indicates anything between will be operated first*/

let animal1 = "monkey", animal2 = "bear", animal3 = "tiger";

// Pretend there's code that might change the values of the animal variables here, then…

animal1 === "monkey" && animal2 === "bear"; // true
animal1 === "ape" && animal2 === "bear"; // false
animal1 === "ape" && animal2 === "bear" && animal3 === "tiger"; // false
animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger"; // true

animal1 === "monkey" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "ostrich"; // false

animal1 === "monkey" || animal2 === "monkey" && animal3 === "tiger";
(animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger";

!true; // false
!false; // true

animal1 === "monkey" && animal2 === "zebra"; // false
!(animal1 === "monkey" && animal2 === "zebra"); // true
animal1 !== "monkey" && animal2 !== "zebra"; // false
animal1 !== "monkey" || animal2 !== "zebra"; // true            

//4.4 Conditionals: if

    /* A control structure in programming is a way to modify the flow of execution. Making decisions like whether to execute a portion of code at all or how many times to execute it. In this video, we're going to look at one of the fundamental control structures, the if statement. With an if statement, you can create forks in the logical road that your code will follow depending on certain conditions. This is also called branching.*/
     
// Execute these in a browser
var answer = window.confirm("Click OK, get true.  Click cancel, get false.");

if (answer === true) {
  console.log("You said true!");
}

if (answer === true) {
  console.log("You said true!");
} else {
  console.log("You said something else");
}

var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");
if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that."); // note the double primes
} else if (answer === "NO") {
  console.log("You said no. :(");
} else {
  console.log("You rebel, you!");
}

var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");
if (answer === "YES" || answer === "NO") {
  // Do some common actions for YES and NO

  if (answer === "YES") {
    console.log("You said YES!");
    // do some other things
  } else {
    console.log("You said no. :(");
    // do some things only for NO
  }
} else if (answer === "MAYBE") {
  console.log("You said maybe.  I don't know what to make of that.");
} else {
  console.log("You rebel, you!");
}

//4.5 Conditionals: Switch

        /*branching in JavaScript: the switch statement. It's similar to if and else statements in results, but it looks different and acts differently at times.*/

var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");

if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that.");
} else if (answer === "NO") {
  console.log("You said no. :(");
} else {
  console.log("You rebel, you!");
}

switch (answer) {
  case "YES":
    console.log("You said YES!");
    break;
  case "MAYBE":
    console.log("You said maybe. I don't know what to make of that.");
    break;
  case "NO":
    console.log("You said no. :(");
    break;
  default:
    console.log("You rebel, you!");
    break;
}

//4.6 Terse if: One-liners

var cherub = "Cupid";
// cherub = 'Norman';

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
else console.log("I feel nothing!");

let errorMsg = '';

if (errorMsg) {
  console.error('There was an error', errorMsg);
}

if (!errorMsg) {
  console.log('Yay! No errors!');
}

let errors = [];

// if (errors) { // Nope - empty arrays are truthy

if (errors.length) {
  console.error("Please fix these errors", errors);
}


//4.7 Terse if: Ternaries
//4.8 Type Checking

// #################### 5.- Iterating with loops ################

// #################### 6.- Functions ################

// #################### 7.- A Few more advance pieces ################

