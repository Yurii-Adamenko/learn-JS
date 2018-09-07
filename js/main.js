// пункт 1
console.log('1)');


var myStrings = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum', 'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo, eos', 'Vero, quos'];

var myStringsWithO = myStrings.filter(function(string) {
  if (string.indexOf('o') > -1)
  {
    return this;
  }
});

console.log(myStringsWithO);

// пункт 2
console.log('2)');
console.log('a.');

var d = new Date();

console.log('1 вариaнт:');

var dateString = (d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + ', ' + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));

console.log(dateString);

console.log('2 вариaнт:');

var dateString2 = dateFormat(d, "yyyy-mm-dd, HH:MM");

console.log(dateString2);

console.log('b.');

console.log('1 вариaнт:');

console.log(d.toLocaleString());

console.log('2 вариaнт:');

var dateString3 = dateFormat(d, "dd.mm.yyyy, HH:MM:ss");

console.log(dateString3);