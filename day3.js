function zeroParameterFunction() {
  /* ... */
}
function threeParameterFunction(one, two, three) {
  /* ... */
}

function sayHello(name) {
  // name is placeholder, it can become any name
  console.log("Hello " + name);
}
sayHello("Dave"); // We pass the argument "Dave"
// When the function gets executed, name will now be the value "Dave"
// output: "Hello Dave"
// We can call the function again with a different argument
sayHello("Jeroen");
// output: "

function learnTopic(topic) {
  console.log(`We are learning ${topic}`);
}
learnTopic("functions");
learnTopic("loops");
learnTopic("scope");

//Getting values back out of functions:return;

function bmi(heightInM, weightInKg) {
  // return the result of the calculation
  return Math.round(weightInKg / (heightInM * heightInM));
}
// call the function with argument
// assign the value that is returned to a variable
const person1BMI = bmi(1.79, 83);
const person2BMI = bmi(1.61, 55);
// Use the variable in your program
console.log(person1BMI); // 26
console.log(person2BMI); // 2

//FUNCTION ADD

function add(number1, number2) {
  return number1 + number2;
}
const sum = add(4, 8);
console.log(sum);

//FUNCTIONS AS VALUES
function add(a, b) {
  return a + b;
}
const addTwoNumbers = add;

console.log(addTwoNumbers(1, 2));
//------

const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 3));

//-----

const modulus = function(c, f) {
  return c % f;
};
console.log(modulus(4, 2));

//OBJECTS

function whatAreYouDoing() {
  console.log("I am cooking");
}
const chef = {
  name: "Rein",
  chefName: "Jeremiah Bocuse",
  age: 30,
  cook: whatAreYouDoing
};
chef.cook();

//-----

const chef1 = {
  name: "Rein",
  chefName: "Jeremiah Bocuse",
  age: 30,
  cook: function() {
    console.log("I am cooking");
  },
  speak: function() {
    console.log("Hello, how are you?");
  }
};
chef1.speak();

//-----LAB ---
//Exercise: Hired by one member of the royal family

//1.
const employer = {
  first_name: "Charles",
  last_name: "Peterson",
  title: "Baron",
  gender: "male"
};
//2.
console.log(employer.first_name);
console.log(employer.last_name);
console.log(employer.title);
console.log(employer.gender);

//3.
const findFormOfAddress = function(employer) {
  console.log(employer);

  if (employer.title === King || employer.title === Queen) {
    return "Your Majesty";

    console.log("it's a queen or a king");
  } else if (employer.title === "Prince" || employer.title === "Princess") {
    // console.log('It is a Prince/Princess')
    return "Your Royal Highness";
  } else if (employer.title === "Duke" || employer.title === "Duchess") {
    // console.log('It is a Duke/Duchess')
    return "Your Grace";
  } else if (employer.title === "Baronet" || employer.title === "Knight") {
    // console.log('It is a Baronet/Knight')
    return `Sir ${employer.first_name}`;
  } else if (employer.title === "Dame") {
    // console.log('It is a Dame')
    return `Dame ${employer.first_name}`;
  } else {
    // console.log('It is a Marquess/Marchioness/Earl/Countess/Viscount/Viscountess/Baron/Baroness')
    if (employer.gender === "female") {
      // console.log(employer.gender)
      return `Lady ${employer.last_name}`;
    } else {
      // console.log(employer.gender)
      return `Lord ${employer.last_name}`;
    }
  }
};
11111;
