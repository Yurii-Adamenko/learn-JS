// пункт 1
console.log('1)');

function outputLine (myString) {
  if (myString) {
    console.log(myString);
  }
  else {
    console.log('The output string is empty! Please enter a string.');
  }
  return myString;
}

outputLine('Hello world!');
outputLine('');

// пункт №2
console.log('2)');

var browser = {
  name: 'Chrome',
  created: 2008,
  version: '68.0.3440.106'
}

console.log(browser);
console.log(browser.name);
console.log(browser.created);
console.log(browser.version);

// пункт №3
console.log('3)');

browser.myMethod = function() {
  return browser.name + ' is one of the most popular browsers in the world.';
}

console.log(browser);
console.log(browser.myMethod());

// пункт №4
console.log('4)');

for (var i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// пункт №5
console.log('5)');

function typeNumber (myNumber) {
  switch(true) {
    case myNumber > 0:
      console.log(myNumber + ' - this is a positive number'); break;
    case myNumber < 0:
      console.log(myNumber + ' - this is a negative number'); break; 
    case myNumber === 0:
      console.log(myNumber + ' - it is zero'); break;  
    default:
      console.log(myNumber + ' - this is not a number. Please enter a number');
  }
}

typeNumber(10);
typeNumber(-10);
typeNumber(0);
typeNumber('hello');

// пункт №6
console.log('6)');

function howManyYears (age) {
  age < 1997 ? console.log('more...'): age > 1997 ? console.log('less...'): console.log('exactly!');
}

howManyYears(1800);
howManyYears(2100);
howManyYears(1997);

// пункт №7
console.log('7)');

var z = 0;
while (z <= 7) {
  console.log(z++);
}

// пункт №8
console.log('8)');

function exponentiation (arg1, arg2, callback) {
  console.log('Число ' + arg1 + ' в степени ' + arg2);
  var arg3 = Math.pow(arg1,arg2);
  callback(arg3);
}

exponentiation(2, 4, function(result) {
  console.log('Результат ' + result);
});