// alert: used to invoke a mini window with a message alert.
alert("Hi, How are you!")

// prompt: used to take user input as string.

alert("Enter the value of a!")
let a = prompt("Enter a here", "57")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))

// confirm: shows a message and wants for the user to press ok or cancel returns true for ok and false for cancel.

let write = confirm("Do you want to write it to the page there?")
if (write) {
  document.write(a)
}
else {
  document.write("Please allow me to write")
}
