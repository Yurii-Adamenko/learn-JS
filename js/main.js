// пункт 1
console.log('1)');


var counter = (function(){
  var count = 0;
  return function(num){
    count = num !== undefined ? num : count;
    return count++;
  }
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(10));
console.log(counter());
console.log(counter());

// пункт 2
console.log('2)');


var greet = function(){
  return 'Hi! My name is ' + this.name + '. I am ' + this.age;
}

var firstPerson = {
  name: 'John',
  age: 21,
  greet: greet
}

var secondPerson = {
  name: 'Bob',
  age: 27,
  greet: greet
}

console.log(firstPerson.greet());
console.log(secondPerson.greet());

// пункт 3
console.log('3)');


var thirdPerson = {
  name: 'Tom',
  age: 32,
  _weight: 90,
  get weight(){
    return this._weight;
  },
  set weight(value){
    this._weight = value;
  },
  greet: greet
}

console.log(thirdPerson.weight);
console.log(thirdPerson);
