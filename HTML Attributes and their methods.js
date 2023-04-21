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

/* 5 elem.attributes : Method to get the Collection of all attributes. */

console.log(first.attributes) 

/* We can always create custom attributes but the ones Starting with "data". If an Element has an attribute named "data-one" its available on element-dataset.one */

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)
