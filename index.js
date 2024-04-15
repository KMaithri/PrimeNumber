console.log("Hey! Is your birth day prime number? Let's check");
console.log("---------------------------------");

var readLineSync = require("readline-sync");
var userName = readLineSync.question("What is your name? ");
var birthDay = readLineSync.question(
  "What is your birth day? (Enter in this format separated by hash(/) (DD/MM) ",
);

var birth = birthDay.split("/");
var i = 2;
var flag = 0;

// ----------------------checks begin---------------
// check if the birthday is not a number
if (isNaN(birth[0]) || isNaN(birth[1])) {
  console.log("Error! Enter date in correct format, try again");
} else if (birth[1] == 2) {
  //check for feb month for not > 29days
  if (birth[0] > 29) {
    console.log(
      "Error!, Febraury month cannot have dates greater 29, try again!",
    );
  }
} else if (birth[0] > 31 || birth[1] > 12) {
  // check for days not > 31 and months not > 12
  console.log(
    "Birth date cannot be greater than 31 or birth month cannot be greater than 12, try again");
} else {
  // if all the checks pass these statements will be executed
  var res = checkPrime(birth[0]);
  if (res === 0) {
    console.log(
      userName.toUpperCase() + "! " + "Your birthday is a prime number",
    );
  } else {
    console.log(
      userName.toUpperCase() + "! " + "Your birthday is not a prime number",
    );
  }
}

// ----------------------checks end-----------------

// function to check prime number
function checkPrime(n) {
  if (n === 0 || n === 1) {
    flag = 1;
    return flag;
  }
  for (i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      flag = 1;
      return flag;
    }
  }
  return flag;
}
