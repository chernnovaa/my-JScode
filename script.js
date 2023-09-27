'use strict';
// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old`);

//1. Create a web-page that asks for a name and outputs it.
// let yourName = prompt('What is your name?', '');
// alert(yourName);

//2. Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’.If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// let question = prompt('What is the “official” name of JavaScript?', '');
// if (question === 'ECMAScript') {
//   alert('Right');
// } else {
//   alert('You don’t know? ECMAScript!');
// }

//3. Using if..else, write the code which gets a number via prompt and then shows in alert: 1, if the value is greater than zero, -1, if less than zero, 0, if equals zero.

// let number = prompt('Type a number', 0);
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//4. Write an if condition to check that age is between 14 and 90 inclusively. “Inclusively” means that age can reach the edges 14 or 90.
// if (age >= 14 && age <= 90);

//5. Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.
// if (!(age >= 14 && age <= 90));
// if (age < 14 || age > 90);

//6. Write the code which asks for a login with prompt. If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”. The password is checked as follows: If it equals “TheMaster”, then show “Welcome!”, Another string – show “Wrong password For an empty string or cancelled input, show “Canceled”

// let userName = prompt('Who is there ?', '');
// if (userName === 'Admin') {
//   let password = prompt('Your password');

//   if (password === 'Admin') {
//     alert('Welcome!');
//   } else if (password === '' || password === null) {
//     alert('Cancled');
//   } else {
//     alert('Wrong password');
//   }
// } else if (userName === '' || userName === null) {
//   alert('I do not know you');
// } else {
//   alert('Canceled');
// }

//7. Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//8. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again. The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// let num;

// do {
//   num = prompt('Введене число, більше за 100?', 0);
// } while (num <= 100 && num);

//9. Write a function min(a,b) which returns the least of two numbers a and b.
const min = function (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
console.log(min(3, 1));

//10. The sum of the object's properties. Write a code to summarize all salaries and save it in the sum variable.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

let billion = 1e9;
console.log(billion); //1000000000
let mcs = 1e-6;
console.log(mcs); //0.000001
let num = 255;
console.log(num.toString(2));
let basket = 0.1 + 0.2;
console.log(basket.toFixed(2)); //0.30

console.log(parseInt('100px')); //100
console.log(parseFloat('12.5em')); //12.5

console.log(Math.random());
console.log(Math.pow(2, 10)); //1024

//11. Write a script that asks the visitor to enter two numbers and displays their sum.
// let a = +prompt('Write a first number', '0');
// let b = +prompt('Write a second number', '0');

// let summ = alert(a + b);

//ARRAY METHODS

//.pop(), .push(items), .shift(), .unshift(items)
let fruits = ['apple', 'orange', 'pear'];
fruits.pop(); //apple, orange
fruits.push('cherry'); //apple, orange, cherry
fruits.shift(); // orange, cherry
fruits.unshift('apple'); //apple, orange, cherry
console.log(fruits);

//.splice()
let about = ['I', 'study', 'JS', 'right', 'now'];
about.splice(0, 3, "Let's", 'dance'); //["Let's", "dance", "right", "now"]
let removed = about.splice(0, 2); //['right', 'now']
console.log(about);

//.slice()
let test = ['t', 'e', 's', 't'];
console.log(test.slice(1, 3)); //e, s
console.log(test.slice(-2)); //s, t

//.concat()
let number = [1, 2];
console.log(number.concat([3, 4], [5, 6], 7, 8));

//.forEach()
let names = ['David', 'Kate', 'Serhio'];
names.forEach((item, index, array) => {
  console.log(`${item} have a position ${index} in this array ${array}`);
});

//.indexOf(), .icludes(), .lastIndexOf()
let example = [1, 0, false];
console.log(example.indexOf(0)); //1
console.log(example.indexOf(false)); //2
console.log(example.indexOf(null)); //-1
console.log(example.includes(1)); //true
console.log(example.lastIndexOf(1)); //0

//.find()
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];
let user = users.find(item => item.id == 1);
console.log(user.name); //John

//.filter()
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length); //2

//.map()
let lengthUsers = users.map(item => item.name.length);
console.log(lengthUsers); //4, 4, 4

//.sort()
let arr = [1, 2, 15];
// arr.sort(function (a, b) {
//   return a - b;
// });
arr.sort((a, b) => a - b);
console.log(arr); //1, 2, 15

//.reverse()
let arr3 = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr3); //5, 4, 3, 2, 1
