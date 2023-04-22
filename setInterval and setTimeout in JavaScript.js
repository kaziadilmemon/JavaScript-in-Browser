document.write("Hello")
/* setTimeout allows to runfunction one after the interval of time.
clearTimeout is used to cancel the execution (Incase we change our mind)

setinterval have all arguments have the same meaning.but inlike setTimeout, it runs the function not only once,but regularly after the given interval of time. To stop further calls, we can use clearInterval */

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c))
  a + b
}

setTimeout(sum, 1000, 1, 2, 7)

//setInterval(function() {
  //alert("setinterval")
}, //3000)

// let a = setTimeout(function() {
//   alert("I am inside of settimeout")
// }, 5000)

// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)
// }
// console.log(a)
