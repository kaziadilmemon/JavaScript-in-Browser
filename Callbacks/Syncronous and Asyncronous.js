/* Asyncronous actions are the actions that we initiate now and finish later. eg:setTimeout */

// Asyncronous Programming : 

console.log("start")
setTimeout(function() {
  console.log("Hey I am good")
},300)
console.log("End")

/* Syncronous actions are the actions that initiate and finish one-by-one */

// Syncronous Programming : 

let a=prompt("What is Your Name?")
let b=prompt("What is Your Age?")
let c=prompt("What is Your Favourite Color?")
console.log(a + " is " +b+ " Years old and has " +c+ " Favourite Color," )

