let first = document.getElementById("first");
/* 1 elem.getAttribute(name) : Method used to get the value of an attribute. */

let a = first.getAttribute("class")
console.log(a)

/* 2 elem.hasAttribute(name) : Method to check for existence of an attribute. */

console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

/* 3 elem.setAttribute(name,value) : Method used to set the value of an attribute. */

first.setAttribute("hidden", "true")
first.setAttribute("class", "true Adil")

/* 4 elem.removeAttribute(name) : Method to remove the attribute from element */

first.removeAttribute("class")
