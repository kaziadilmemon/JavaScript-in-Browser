/* console.dir function: console.log shows the element DOM tree, console.dir shows the element as an object with its properties.*/
let x=document.getElementsByTagName('span')[0]
console.log(x)
let y=document.getElementsByTagName('span')[0]
console.log(y)

/* Tag Name/node Name: used to read tag name of an element.
 tagName: only exists for element Nodes,
 nodeName: defined for any node(text,comment etc) */

console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)

/* InnerHTML / OuterHTML : 
The InnerHTML property allows to get the HTML inside the element as a valid for element nodes only.
The OuterHTML property contains the full HTML innerHTML+ the element itself. */

first.innerHTML 
 first.innerHTML = "<i>hey I am italic</i>" 
 first.outerHTML 
 first.outerHTML = "<div>hey</div>"
 document.body.firstChild.data 
 console.log(document.body.textContent)
 first.hidden = false
