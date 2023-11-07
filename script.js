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
let number1 = [1, 2];
console.log(number1.concat([3, 4], [5, 6], 7, 8));

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

//GAME GUESS-------------------------------------------------------------------------------------------
//defined secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.guess__right-message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess__left-input').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    //document.querySelector('.guess__right-message').textContent = 'No number !';
    displayMessage('No number!');

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.guess__right-message').textContent =
    //   'Correct number!';
    displayMessage('Correct number!!!');

    //display secret number
    document.querySelector('.guess__number').textContent = secretNumber;

    //styles
    document.querySelector('.guess').style.backgroundColor = '#067d68';
    document.querySelector('.guess__number').style.borderRadius = '50%';

    //implementing highscores
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.guess__right-message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.guess__right-message').textContent =
      //   'Lost the game!';
      displayMessage('Lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').style.backgroundColor = '#e65c4f';
    }
  }

  //   //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess__right-message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess__right-message').textContent =
  //       'Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.guess').style.backgroundColor = '#e65c4f';
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess__right-message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess__right-message').textContent =
  //       'Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.guess').style.backgroundColor = '#e65c4f';
  //   }
  // }
});

//button again
document.querySelector('.guess__again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.guess__right-message').textContent =
  //   'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').style.backgroundColor = '#014871';
  document.querySelector('.guess__number').style.borderRadius = '0';
  document.querySelector('.guess__number').textContent = '?';
  document.querySelector('.guess__left-input').value = '';
});

// MODAL WINDOW ----------------------------------------------------------------------------------------
/*
const modal = document.querySelector('.modal__hidden'); //це шукає тільки перший елемент на сторінці
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.modal__close'); //це шукає тільки перший елемент на сторінці
const btnsOpenModal = document.querySelectorAll('.modal__show');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//це можна мінімізувати одною строчкою
//modal.classList.toggle('hidden', тут умова)

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

*/

const navigationButtons = document.getElementsByClassName('navigation__btn');
const modal = document.getElementsByClassName('modal');
const modalCloseButton = document.getElementsByClassName('modal__close');
const modalTitle = document.getElementsByClassName('modal__title');
const modalText = document.getElementsByClassName('modal__text');
const overlay = document.querySelector('.overlay');

function closeModal() {
  modal[0].classList.add('hidden');
  overlay.classList.add('hidden');
}

function onModalShow(e) {
  modal[0].classList.remove('hidden');

  const currentButton = e.currentTarget;

  modalTitle[0].textContent = currentButton.textContent;
  modalText[0].textContent = currentButton.getAttribute('data-text');

  overlay.classList.remove('hidden');
}

modalCloseButton[0].addEventListener('click', closeModal);

for (let i = 0; i < navigationButtons.length; i++) {
  navigationButtons[i].addEventListener('click', onModalShow);
}

overlay.addEventListener('click', closeModal);

//PIG-GAME  --------------------------------------------------------------------------------
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//starting condition

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolled 1
    if (dice !== 1) {
      //add dice tocurrent score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active player's score
    scores[activePlayer] += currentScore;
    //score[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

const arrr = [2, 3, 4];
// const a = arrr[0];
// const b = arrr[1];
// const c = arrr[2];
const [x, y, z] = arrr;
console.log(x, y, z);
const [a, , b] = arrr;
console.log(a, b);

let c = 11;
let t = 99;
console.log(c, t);
const o = { c: 12, t: 100 };
({ c, t } = o);
console.log(c, t);

// const orderPasta = function (ing1, ing2, ing3) {
//   console.log(`Your pasta with ${ing1}, ${ing2} and ${ing3}`);
// };
// const ingredients = [
//   prompt('Create a pasta, ingredient 1 ?'),
//   prompt('ingredient 2 ?'),
//   prompt('Ingredient 3 ?'),
// ];
// orderPasta(...ingredients);

const v = [4, 5, 6];
const vv = [1, 2, 3, ...v];
console.log(vv);

const addNumbers = function (...numbers) {
  console.log(numbers);

  let sum = 0; //accumulating
  for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
  console.log(sum);
};

const p = [23, 44, 6];

addNumbers(...p);
addNumbers(2, 2);
addNumbers(5, 8, 3, 4, 6);

const rest1 = {
  name: 'La Pizza',
  numGuest: 0,
};

const rest2 = {
  name: 'Pepko',
  owner: 'Pepko Dola',
};

rest1.numGuest ??= 10;
rest2.numGuest ||= 10;
rest2.owner &&= 'ANONYMOUS';
console.log(rest1, rest2);

///////////////////////////////////////
// Coding Challenge #10

/* 
We're building a football betting app!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

const menu = ['Pasta', 'Salat', 'Cake', 'Soup', 'Pizza'];

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

///////////////////////////////////////
// Coding Challenge #11

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

*/

//1
for (const [goal, plName] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${plName}`);
}

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// const question = new Map([
//   ['guestion', 'What is the best fruit ?'],
//   [1, 'apple'],
//   [2, 'banana'],
//   [3, 'strawberry'],
//   ['correct', 2],
//   [true, 'Correct !'],
//   [false, 'Try again'],
// ]);

// console.log(question.get('guestion'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

///////////////////////////////////////
// Coding Challenge #12

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4
for (const [min, e] of gameEvents) {
  const half = min < 45 ? 'First' : 'Second';
  console.log(`[${half} half] ${min}: ${e}`);
}

const air = 'TAP Air Portugal';
console.log(air.slice(1, 16));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat: ${seat}`);
  } else {
    console.log(`Your seat: ${seat} is not in the middle`);
  }
};
checkMiddleSeat('12B');
checkMiddleSeat('1E');
checkMiddleSeat('23H');

const passenger = function (name) {
  const toLower = name.toLowerCase();
  const correct = toLower[0].toUpperCase() + toLower.slice(1);
  return correct;
};
console.log(passenger('daViD')); //David
console.log('a+very+nice+string'.split(' '));

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
    //nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};
capitalizeName('kate chernova');

const maskCreditCard = function (card) {
  const str = card + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(6353751236));
console.log(maskCreditCard('7216128'));

///////////////////////////////////////
// Coding Challenge #13

const camelCase = function () {
  const names = [
    'underscore_case',
    '  first_name',
    'Some_Variable',
    '  calculate_AGE',
    'delayed_departure',
  ];
  for (const name of names) {
    const [first, second] = name.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output.padEnd(20), '!');
  }
};
camelCase('underscore_case');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '!' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46);
  console.log(output);
}
const ss = ['a', 'b', 'c'];
console.log(ss.at(0));

const movements = [200, -300, 400, 1700, -20, 80, -60];

movements.forEach(function (mov, i) {
  if (mov < 0) {
    console.log(`You withdrew ${i + 1}: ${Math.abs(mov)}`);
  } else {
    console.log(`You deposited ${i + 1}: ${mov}`);
  }
});

///////////////////////////////////////
// Coding Challenge #14

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
const checkDogs = function (dogsJulia, dogsKate) {
  //1
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  //2
  const correctDogs = dogsJuliaCorrected.concat(dogsKate);
  //3
  correctDogs.forEach(function (year, i) {
    if (year >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${year} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------- BANKIST ---------------------------------------
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__value">${mov}</div>
          </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
