// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//BOOLEANS

// const a = 4; 
// const b = 53; 
// const c = 57; 
// const d = 16; 
// const e = 'Kevin';

// console.log(a < b); 
// console.log(c > d); 
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false); 
// console.log(false && false && false && false && false || true); 
// console.log(false === false) 
// console.log(e == 'Kevin'); 
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
} 

console.log(moo(animal));

//Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

var age = 50
{
if (age >= 16 ){
console.log("Here are the keys!");
}
else {
   console.log("Sorry, you're too young.");
}
}

//LOOPS
//Remember: USE letwhen you initialize your for loops!
//This is GOOD: `for(let i = 0; i < 100; i++)`
//This is NO GOOD: `for(i = 0; i < 100; i++)`
//The Basics
// - Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
// - Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
    console.log(i);
  }
// - Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
  }

//Get Even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i + " <-- is an even number");
    } else {
      console.log(i);
    }
  }

//Give Me 5
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five:
// **Example Output:**
// I found a 5. High five!
// I found a 10. High five!

for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log("I found a number. High five!");
    }
  }
  
  // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
  // **Example Output:** 
  // I found a 3. Three is a crowd
  // I found a 5. High five!
  // I found a 6. Three is a crowd
  // I found a 9. Three is a crowd
  // I found a 10. High five!
  // For numbers divisible by both three and five, be sure your code prints both messages
  
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(`I found a ${i}. High five!`);
    }
    else if (i % 3 === 0 ){
       console.log(`I found a ${i}. Three is a crowd`);
    }
  }

//Savings Account
// - Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
// - Check your work! Your `bank_account` should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your `bank_account` should have $10,100 in it.
// Task 1
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i; //bank_account = bank_account + i
}
console.log(bank_account);

// Task 2
bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i; //bank_account = bank_account + i
}
bank_account *= 2;
console.log(bank_account);

//ARRAYS & CONTROL FLOW
// ## III. Arrays & Control flow
// ### A. Talk about it:
//What are the things in an array called?
//The things in an array are called elements.

// Do Arrays guarantee those things will be in order?
// Yes, the arrays will guarantee that the elements will be in a specific order.

// What real-life thing could you model with an array?
// shopping list can be a model with an array. Each item on the list can be represented as an element in the array.

// ### B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

var quotes = [
"Success is getting what you want, happiness is wanting what you get. ―W. P. Kinsella",
"The most difficult thing is the decision to act, the rest is merely tenacity. —Amelia Earhart",
"The standard you walk past, is the standard you accept. —David Hurley"
];

// ### C. Accessing elements
// Given the following array `const randomThings = [1, 10, "Hello", true]`
// - How do you access the 1st element in the array?
// - Change the value of `"Hello"` to `"World"`
// - Check the value of the array to make sure it updated the array using `console.log()`

const randomThings = [1, 10, "Hello", true];
const firstElement = randomThings[0];
console.log(firstElement);

randomThings[2] = "World";
console.log(randomThings); //[1, 10, "World", true]

// ### D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const thirdElement = ourClass[2];
console.log(thirdElement);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

// ### E. Mix It Up
// Note: You don't really need `.splice()` for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: `const myArray = [5, 10, 500, 20]`
// - Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// - Remove the 5from the beginning of the array.
// - Add the string "Bob Marley"to the beginning of the array.
// - Remove the string of your choice from the end of the array.
// - Reverse this array using `Array.prototype.reverse()`. 
// - Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20];

myArray.push("Aegon", "Dagon"); 
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop(); 
myArray.reverse();
console.log(myArray);

// ### F. Biggie Smalls
// Create a variable that contains an integer.
// Write an `if ... else` statement that:
// - `console.log()s` "little number" if the number is entered is less than 100
// - `console.log()s` "big number" if the number is greater than or equal to 100.

const number = 77;

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// ### G. Monkey in the Middle
// Write an `if ... else if ... else` statement:
// 1. console.log()little numberif the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey".

const newNumber = 6;

if (newNumber < 5) {
  console.log("little number");
} else if (newNumber > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// ### H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const person = {
  firstName: "John",
  lastName: "Smith",
  age: 25
};

// `// Thom's closet is more complicated. Check out this nested data structure!!`
// ```
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// ```

// **What's Kristyn wearing today?**
// 1. Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat". Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

kristynsCloset.splice(6, 0, "raybans");
kristynsCloset[5] = "stained knit hat";

// 3. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

const thomsShirts = thomsCloset[0];
console.log(thomsShirts[0]);

// **In the same way, access one item from Thom's pants array.**
// - Access one item from Thom's accessories array.

const tPants = thomsCloset[1];
const selectedPants = tPants[1];
console.log(selectedPants);

// - Log a sentence about what Thom's wearing. 
// *Example:* "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

const thomShirt = thomsCloset[0][0];
const pants = thomsCloset[1][1];
const thomAccessory = thomsCloset[2][1];
console.log(`Thom is looking fierce in a ${thomShirt}, ${pants}, and ${thomAccessory}!`);

// - Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";

// # IV. FUNCTIONS
// B. printCool
// Write a function `printCoolthat` accepts one parameter, `name`, as an argument. 
//The function should print the name and a message saying that that person is cool.
// `console.log(printCool("Captain Reynolds"));`
// `=> "Captain Reynolds is cool";`

function printCool(name) {
  console.log(name + " is cool");
}
printCool("Captain Reynolds"); 

// ### C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
// `console.log(calculateCube(5));`
// `=> 125`

function calculateCube(number) {
  var cubic = Math.pow(number, 3);
  console.log(cubic);
}
calculateCube(5);

// ## D. isVowel
// 1. Write a function `isVoweltha`t takes a character (i.e. a string of length 1) and returns `true` if it is a vowel, `false` otherwise. 
// 2. The vowel could be upper or lower case. 
// Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// `console.log(isVowel("a"));`
// `=> true`

function isVowel(character) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var lowercaseChar = character.toLowerCase();

  return vowels.includes(lowercaseChar);
}
console.log(isVowel("A"));  // true
console.log(isVowel("c"));  // false
console.log(isVowel("e"));  // true
console.log(isVowel("z"));  // false

// ### E. getTwoLengths
// Write a function `getTwoLengthsthat` accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// `console.log(getTwoLengths("Hank", "Hippopopalous"));`
// `=> [4, 13]`

function getTwoLengths(string1, string2) {
  var lengths = [string1.length, string2.length];
  return lengths;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));  // [4, 13]


// ### F. getMultipleLengths
// Write a function `getMultipleLengthsthat` accepts a single parameter as an argument: an array of strings. 
//The function should return an array of numbers where each number is the length of the corresponding string.
// `console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));`
// `=> [5, 4, 2, 2, 4]`

function getMultipleLengths(arr) {
  var lengths = [];
  for (var i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));  // [5, 4, 2, 2, 4]

// ### G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. 
//Be sure to test it with larger values in each of the three locations.
// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(maxOfThree(6, 9, 1));  // 9

// ### H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

function printLongestWord(words) {
  let longestWord = '';
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));  // "Peanutbutter"

// ## Objects
// Let's set up an object data structure. 
// Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
// ### A. Make a user object
// - Create an object called user.
// Write in to the object the **key-value** pairs for name, email, age, and purchased. Set the value of purchased to an empty array `[]`. Set the other values to whatever you would like.

const user = {
  name: "Example Name",
  email: "examplename@example.com",
  age: 30,
  purchased: []
};

console.log(user)

// ### B. Update the user
// - Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
// - Our user has had a birthday! Without changing the original user object, increment the agevalue using the postfix operator. Hint: age++!

const updatedUserEmail = { ...user, email: "newemail@example.com" }; // Updated email value to a new email address
user.age++; // Updates `age` value

console.log(updatedUserEmail)

// ### C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// - Without changing the original user object, add a new key locationto the object, and give it a value or some-or-other location (a string).

const updatedUserLocation = { ...user, location: "New York City" };
console.log(updatedUserLocation)

// ### D. Shopaholic!
// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchasedarray`.
// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the `purchasedarray`.
// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchasedarray`.
// Console.log just the "Merino jodhpurs" from the `purchasedarray`.

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

// ### E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
// ```
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// ```
// When we console.log user, we would see the friend object added to our user object.
//1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

user.friend = { 
  name: "Grace Hopper",
  age: 85,
  location: "California",
  purchased: []
};

// 2. Console.log just the friend's name

console.log(user.friend.name);

// 3. Console.log just the friend's location

console.log(user.friend.location);

// 4. CHANGE the friend's age to 55
// The friend has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchasedarray`.

user.friend.age = 55;
user.friend.purchased.push("The One Ring");

// 5. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's `purchasedarray`.

user.friend.purchased.push("A latte");

// 6. Console.log just "A latte" from the friend's `purchasedarray`.

console.log(user.friend.purchased[1]);

// ### F. Loops
// - Write a for loop that iterates over the User's `purchasedarray` (NOT the friend's purchased array), and prints each element to the console.
// - Write a for loop that iterates over the Friend's `purchasedarray`, and prints each element to the console.

for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]); // 1
}

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
} // 2

// ### G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// 1. it should increment the user's age by 1
// 2. make the user's name uppercase
// 3. The function does not need a return statement, it will merely modify the user object.

function updateUser() { 
  user.age++;
  user.name = user.name.toUpperCase();
}

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
// Call your oldAndLoudfunction with useras the argument.

function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}
oldAndLoud(user);




















