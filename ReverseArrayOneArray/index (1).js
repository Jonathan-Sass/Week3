var fruit1 = 'apples';
var fruit2 = 'oranges';

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + ' and ' + fruit1);

var start = 0;
var end = 12;

while (start < end) {
  console.log('start: ' + start + ', end: ' + end);
  start += 2;
  end -= 2;
}

// prediction:
// start: 0, end: 12
// start: 2, end: 10
// start: 4, end: 8

// function declaration
function reverse(arr) {
  // your code here
}

// test case
var myArr = ['a', 'b', 'c', 'd', 'e'];

// function call
reverse(myArr); // returns ["e", "d", "c", "b", "a"]
