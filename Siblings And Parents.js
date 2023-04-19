console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)

/* DOM Collections:
=> They are read only.
=> They are live elem.Child Nodes variables (reference) will automatically update if child Nodes of elem is changed.
=> They are iterable using for.....of Loop.

Siblings and the Parent:
=>  Siblings are nodes that are children of the same parent.

For Example: <head> and <body> are Siblings. 
  Siblings have same parent.In the above example its HTML.

=> <body> is said to be the "next" or "right" sibling of <head>,<head> is said to be the "previous" are "left" sibling of <body>

=> The next sibling is in next Sibling property, and the previous one in previous String

  
