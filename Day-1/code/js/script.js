//variables
var a = "coffee"; //string

// In es6/ es2015
let b = "tea";

const c = "choclate";
console.log(a, b, c);

console.log(a + b);

let age = 20; //number

//comparison
console.log(age == "20"); //only value
console.log(age === "20"); //value + datatype

// console.log(age != 20);

// if(condition) {

// }

//find the biggets of 3 numbers
let x = 10;
let y = 20;
let z = 30;

let max = 0;
if (x > y) {
  max = x;
} else {
  max = y;
}

if (max > z) {
  //   alert(max + " is greater");
} else {
  //   alert(z + " is greater");
}

//Ternary operator (condition ? () : ())
age == 20
  ? console.log(age + " is equal")
  : console.log(age + " is note equal");

// if(condition) {

// }
// else if(condition) {

// }
// else {

// }

// !
console.log(!true);

//loops
//for, while, do while
// for(statement1(initialization) ; statement2(condition); st3 (inc/dec)) {
//code
// }

// st1 -> st2  -> boc -> st3 -> st2 -> boc -> st3 -> st2
for (let i = 0; i <= 10; i = i + 1) {
  console.log(i); //0 1 2 3 4 5 6 7 8 9 10
}

//while
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

//array
let num = [10, 203, 29, 39, 3, 11];

//
function add() {
    let sum = 10 + 20;
    console.log(sum);
}

add();
add();


// a, b -> parameters
function subtract(a, b) {
    console.log(a - b);
}

subtract(20, 10);//arguments
subtract(100, 60);
subtract(100, 30);

//
