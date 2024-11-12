//normal function
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

//arrow function/fat arrow (ES6)
multiply = (x, y) => x * y;

console.log(multiply(10, 4));

// 1. syantx 2. return

//arrays
let num = [10, 20, 3, 40, 5, 8, 10, 20, 30];
let colors = ["pink", "red", "blue", "orange"];

//map: iterate over array, return new array
// num.map(callback function)
// num.map(function() {

// })

let mapResult = num.map((ele) => {
  return ele * 2;
});

// is similar is
// let mapResult = num.map((ele) => ele * 2);
console.log(mapResult);

//forEach: iterate over array
num.forEach((e) => {
  console.log(e);
});

//filter
let filterResult = num.filter((ele) => {
  return ele >= 20;
});

console.log(filterResult);

//concat
let merged = num.concat(colors);
console.log(merged);

//reduce

//Objects
//property/value
//key/value
let person = {
  firstName: "alina",
  lastName: "joe",
  isMarried: false,
  age: 20,
  favColors: ["pink", "violet"],
  contact: {
    contact_number: 9999999,
    email_address: "admin@gmail.com",
  },
};

//display value from object
console.log(person.firstName + " " + person.lastName);
console.log(person.contact.email_address);

//add new property
person.city = "pune";
console.log(person);

//update
person.age = 25;
console.log(person);

//delete new property
delete person.isMarried;
console.log(person);

//Arrays of objects
let products = [
  {
    id: 101,
    title: "Iphone 16 Prox",
    original_price: 90000,
    discount: 15,
    produce_image: "",
    category: "Electronics",
    sub_category: "mobile phone",
    product_brand: "iphone",
  },
  {
    id: 102,
    title: "Micromax 2",
    original_price: 12000,
    discount: 12,
    produce_image: "",
    category: "Electronics",
    sub_category: "mobile phone",
    product_brand: "Micromax",
  },
];

//Function declaration
letUpgrade();

function letUpgrade() {
  console.log("Learning platform");
}

//function expression
const letsUpgrade = function () {
  console.log("Learning platform Bootcamp!");
};

letsUpgrade();

//JSON: javascript object notation
// stringify: array or object to JSON
let arr = [3, 6, 4, 2, 3, 12];
console.log(JSON.stringify(arr)); //'[3, 6, 4, 2, 3, 12]'
let data = JSON.stringify(person);
console.log(data);

//parse(): converting JSON to array or object
console.log(JSON.parse(data));

