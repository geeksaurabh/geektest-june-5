//ANSWER 1-- There are two ways from which we can create a function such as-
// 1=FUNCTION DECLARATION
// 2=FUNCTION EXPRESSION

// Following are a few key differences between function expressions and function declarations such as:

// 1-Function declarations are hoisted, while function expressions are not. ...
// 2-With function expressions, you can use a function immediately after it is defined. ...
// 3-Function expressions can be used as an argument to another function, but function declarations cannot.
// 4-Function expressions can be anonymous, while function declarations cannot.

//EXAMPLE OF FUNCTION DECLARATION =>// function mfname(fname = "defaultvalue", lname = "defaultvalue") {
//   console.log("hello " + fname + lname);
// }
// mfname("saurabh", "raj");
// mfname("raj", "gaurav");
// mfname("alok", "raj");
// mfname("awasthi", "nitesh");

//EXAMPLE OF FUNCTION EXPRESSION =>   let a2 = function c() {
//   console.log("namaste");
// };
// a2();

// ANSWER 2--

// function cubeOfNumbers() {
//   for (i = 1; i <= 5; i++) {
//     let b = i * i * i;
//     console.log(b);
//   }
// }
// cubeOfNumbers();

// //ANSWER 3--
// let sum = 0;
// function printOddNumbers() {
//   for (let j = 1; j <= 9; j++) {
//     if (j % 2 !== 0) {
//       console.log(j + "");
//       sum = sum + j;
//     }
//   }
//   console.log("sum of above odd numbers=" + sum);
// }

// printOddNumbers();

//ANSWER 4--
// let n = parseInt(prompt("enter the number you want to check"));
// function primeNumber(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let k = 2; k < n; k++) {
//     if (num % k === 0) {
//       return false;
//     } else {
//       console.log(num);
//     }
//   }
// }
// primeNumber();
// primeNumber(n) ? console.log("true") : console.log("false");

function prime(n) {
  let num = 1,
    count = 0,
    i;
  while (count < n) {
    num = num + 1;
    for (i = 2; i <= num; i++) {
      if (num % i == 0) {
        break;
      }
    }
    if (i == num) {
      //increments the count variable by 1 if the number is prime
      count = count + 1;
    }
  }
  console.log("The " + n + "th prime number is: " + num);
  document.write("The " + n + "th prime number is: " + num);
}

let num = parseInt(prompt("Enter number for prime number"));
//Function Calling
prime(num);
