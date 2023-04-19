console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)

/* DOM Collections:
=> They are read only.
=> They are live elem.Child Nodes variables (reference) will automatically update if child Nodes of elem is changed.
=> They are iterable using for.....of Loop.
