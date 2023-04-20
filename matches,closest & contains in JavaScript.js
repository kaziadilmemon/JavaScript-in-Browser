let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
/* elem.matches(CSS): to check if element matches the given CSS Selector. */

console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
/* elem.closest(CSS): To look for the nearest ancestor that matches the given CSS-selector.The elem itself is also checked. */

console.log(sp1.closest("#sp1"))

/* elemA.contains(elem) : Returned true if elemB is inside elemA (a descendant of elemA) or when elemA==elemB */

console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))
