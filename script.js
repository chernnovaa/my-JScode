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

//---------------------------------------------------------------------ARRAY METHODS

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

//.split(delim)
let member = 'David, Kate, Maria';
let str = member.split(', ');
for (let name of str) {
  console.log(`A messege to ${name}`); //A messege to Maria
}

//.join(glue)
let glue = names.join('; ');
console.log(glue); //David; Kate; Serhio

//.reduce()
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); //18

//12. Convert the text from border-left-width to borderLeftWidth. Write a camelize(str) function that converts the following strings "my-short-string" to "myShortString". That is, hyphens are removed, and all words after them begin with a capital letter.

let camelize = function (str) {
  return str
    .split('-')
    .map(
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1) //index == 0 (умова) ? (якщо) word :
    )
    .join('');
};

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));

//13. Sort in descending order
let sort = [5, 2, 1, -10, 8];
console.log(sort.sort().reverse());
//sort.sort((a, b) => b - a);
//console.log(sort);

//14. Copy and organize an array. We have an array of strings arr. You need to get a sorted copy and leave arr unchanged. Create a copySorted(arr) function that will return such a copy.
let lang = ['HTML', 'JavaScript', 'CSS'];
function copySorted(arr) {
  //return arr.sort((a, b) => a.localeCompare(b)).join(' ');
  return arr.slice().sort();
}
console.log(copySorted(lang));
console.log(lang);

//15. Transform to an array of names. You have an array of user objects, and each of them has a user.name. Write a code that converts them to an array of names.
let ivan = { name: 'Іван', surname: 'Іванко', id: 1 };
let petro = { name: 'Петро', surname: 'Петренко', id: 2 };
let mariya = { name: 'Марія', surname: 'Мрійко', id: 3 };

let members = [ivan, petro, mariya];

let membersName = members.map(mem => mem.name);
console.log(membersName);

//16. Transform to objects. You have an array of user objects, and each of them has a name, a surname, and an id. Write code that creates another array of objects with the parameters id and fullName, where fullName consists of name and surname.
// let ivan = { name: 'Іван', surname: 'Іванко', id: 1 };
// let petro = { name: 'Петро', surname: 'Петренко', id: 2 };
// let mariya = { name: 'Марія', surname: 'Мрійко', id: 3 };

// let members = [ivan, petro, mariya];

let usersMapped = members.map(mem => ({
  fullName: `${mem.name} ${mem.surname}`,
  id: mem.id,
}));
console.log(usersMapped);

///////////////////////////////////////
// let range = {
//   from: 1,
//   to: 5,
// };

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// for (let num of range) {
//   console.log(num); //1, 2, 3, 4, 5
// }

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num); //1, 2, 3, 4, 5
}

for (let char of 'test') {
  console.log(char);
}

//Array.from

let r = Array.from(range);
console.log(r); //1, 2, 3, 4, 5

let square = Array.from(range, num => num * num);
console.log(square);

/////////////////////////////
//map------------------------
let map = new Map();
map.set('1', 'str1'); // рядок як ключ
map.set(1, 'num1'); // цифра як ключ
map.set(true, 'bool1'); // булеве значення як ключ
console.log(map.get(1)); //num1
console.log(map.get('1')); //str1
console.log(map.size); //3

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomato', 350],
  ['potato', 50],
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); //cucumber tomato potato
}

for (let amount of recipeMap.values()) {
  console.log(amount); //500 350 50
}

for (let entry of recipeMap) {
  console.log(entry); //(2) ['cucumber', 500] ...
}

recipeMap.forEach((value, key, _) => {
  console.log(`${key} costs: ${value}`);
});

let obj = {
  name: 'David',
  age: 80,
};

let one = new Map(Object.entries(obj));
console.log(one.get('name')); //David

let prices = Object.fromEntries([
  ['banana', 11],
  ['orange', 25],
  ['apple', 2],
]);
console.log(prices.apple); //2

let prices2 = new Map();
prices2.set('banana', 11);
prices2.set('orange', 25);
prices2.set('apple', 2);

let pr = Object.fromEntries(prices2);
console.log(pr.banana); //11

//set---------------------------------
let set = new Set();
let guest1 = { name: 'Serhio' };
let guest2 = { name: 'Misha' };
let guest3 = { name: 'Kolya' };

set.add(guest1);
set.add(guest1);
set.add(guest2);
set.add(guest2);
set.add(guest2);
set.add(guest3);

console.log(set.size); //3

for (let user of set) {
  console.log(user.name);
}

//task
let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(values)); //(3) ['Hare', 'Krishna', ':-O']

//task
let anagrams = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  let map = new Map();

  for (let word of anagrams) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));

//task
let salary = {
  Іван: 100,
  Петро: 300,
  Марія: 250,
};

function sumSalaries(salary) {
  let sum = 0;
  for (let s of Object.values(salary)) {
    sum += s;
  }
  return sum;
}

console.log(sumSalaries(salary)); //650

//task
let boba = {
  name: 'Boba',
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(boba)); //2

//udemy
//CHALLENGE #1
//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//CHALLENGE #2
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

//CHALLENGE #3
//There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

const scoreDolphins = (98 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy');
}

//CHALLENGE #4
//Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
//////////////////////////////////////

//functions
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  //console.log(apples, oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
};
console.log(fruitProcessor(2, 4));
//fruitProcessor(3, 5);
/////////////////////////////////////

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
// const age = calcAge(2004);
// console.log(`${age} years old`);

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(2003, 'David'));
console.log(yearsUntilRetirement(1950, 'Oleh'));
/////////////////////////////////////

//CHALLENGE #5
//Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

const calcAverage = (a, b, c) => a + b + c / 3;
let scoreDolphins2 = calcAverage(44, 23, 71);
let scoreKoalas2 = calcAverage(65, 54, 49);
console.log(scoreDolphins2, scoreKoalas2);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins}) vs (${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas}) vs (${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
checkWinner(scoreDolphins2, scoreKoalas2);

//CHALLENGE #6
//Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

//object
const jonas = {
  firstName: 'Jonas',
  lastName: 'Shmit',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Stiven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

//CHALLENGE #7
//Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
}

//loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

const years = [1991, 2007, 1969, 2015];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

const michael = [
  'Michael',
  'Patison',
  2023 - 1991,
  'teacher',
  ['Jonas', 'Peter', 'Steven'],
];

// for (let i = 0; i < michael.length; i++) {
//   console.log(michael[i]);
// }

for (let i = michael.length - 1; i >= 0; i--) {
  console.log(michael[i]);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end');
}

//CHALLENGE #8
//Let's improve Steven's tip calculator even more, this time using loops!

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage2([2, 3, 7]));
console.log(calcAverage2(totals));

//section 5
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
//calcTempAmplitude([2, 6, 4, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/*CHALLENGE #9
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(
  `...${data1[0]}ºC in 1 days ... ${data1[1]}ºC in 2 days ... ${data1[2]}ºC in 3 days ...` //hard-code
);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
