/* Question 5 : Write a Program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive! */

let age= prompt("Enter your Age")
age =Number.parseInt(age)
const candrive(age) =>{
  return age>18?true:false
}
if(candrive(age)){
  alert("Yes you can Drive! ")
}
else {
  alert("You can't Drive")
}

/* In Q5 use confirm to ask the user if he wants to see the prompt again. */

let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false
}

while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  
  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}



/*  In the previous Question, use console.error to log the error if the age is entered is negative. */

let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false
}

while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}

/* Question 6 : Write a program to change the url to google.com (Redirection) if user enters a number greater than 4. */

let number = prompt("Enter your number")
number = Number.parseInt(number)

if (number > 4) {
  location.href = "https://google.com"
}

/* Change the background of the page to yellow,red or any other color based on user input through prompt */

let color = prompt("Enter the page background color")
document.body.style.background = color
