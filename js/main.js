// пункт №2
console.log('2)');

var myString = 'Hello',
  myNumber = 10,
  myBool = true,
  block = [1, 2, 3, 4, 5],
  obj = {lang: 'JS'};

console.log(myNumber);
console.log(myString);
console.log(myBool);
console.log(block);
console.log(obj);

// пункт 3
console.log('3)');

myNumber = myNumber.toFixed(2);
console.log(myNumber);

// пункт №4
console.log('4)');

var i = 5;
console.log('i = ' + i);
console.log(++i);
console.log(i++);
console.log(i);

// пункт №5
console.log('5)');

var n = 10;
console.log('n = ' + n);
n += 15;
console.log('n = n + 15 = ' + n);
n -= 5;
console.log('n = n - 5 = ' + n);
n *= 2;
console.log('n = n * 2 = ' + n);
n /= 4;
console.log('n = n / 4 = ' + n);
n %= 3;
console.log('n = n % 3 = ' + n);

// пункт №6
console.log('6)');

console.log(Math.PI);
console.log(Math.round(89.279));
console.log(Math.random()*10);
console.log(Math.pow(2,5));

// пункт №7
console.log('7)');

var myString2 = 'Hello world!';
console.log('length of the string: "%s" is ' + myString2.length, myString2);

// пункт №8
console.log('8)');

console.log(myString2.indexOf('world'));

// пункт №9
console.log('9)');

console.log(myString2.replace('world', 'Andrey'));

// пункт №10
console.log('10)');

myString2 = myString2.toUpperCase();
console.log(myString2);
myString2 = myString2.toLowerCase();
console.log(myString2);