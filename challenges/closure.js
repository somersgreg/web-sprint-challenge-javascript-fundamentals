// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:
// The nested function accesses its fn methods environment and that of its parent through inheritance.  This fact may be a side effect of how JS code is processed but its a useful tool for creating Public, Private, and Priviledged "members", which is referred to as closure.  That is to say there is a natural barrier to access of data amoung levels of nested code, maybe due to the synchronous nature of the JS runtime.  Maybe its an accident, but its considered a very powerful property of Javascript.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation1(n){
  return ( n * ( n + 1 ) ) / 2 ;
}
function summation2(n){
  return (n + 1) * (n / 2) ;
}
function summation3(n){
  return n * (n + 1) / 2;
}
/* This solution is attribute to Gauss. A teacher is said to have asked the class to sum numbers from 1 to 100. Gauss answered in only a few seconds, and the teacher assumed he was lying.
Gauss noticed that adding the first and last number (1 and 100) was 101. Adding the second and next to last (2 and 99) was also 101. Adding the third and third to last was 101 (3 and 98).
This pattern holds up. You just pair the nth and nth from last number and it sums to num + 1. There are num / 2 such pairs.

So (n + 1) * (n / 2) is the total
https://www.cs.umd.edu/~clin/MoreJava/ControlFlow/while-ex3.html */

function summation4(n){
  let count = 0;
  for(let i = 1; i <= n; i++){
    count += i;
  }
  return count;
}
console.log("I did summation in several ways:")
console.log(summation1(100));
console.log(summation2(100));
console.log(summation3(100));
console.log(summation4(100));
