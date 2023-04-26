console.log(document.body.firstChild)
console.log(document.body.lastChild)
let arr = Array.from(document.body.childNodes)
console.log(arr)

/* Direct as well as deeply nested elements of an element are called its children.
child nodes => Element that are direct children 
For example: head and body are children of <html>

  ChildNodes looks like an array but it not actually an array but a collective we can use Arrayfrom(collection) to convert it into an 
  Array. (Array methods can't work) */
