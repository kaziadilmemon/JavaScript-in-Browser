/* 
Cookies are small Strings of data stored directly in the browser.In javascript,document.cookie provides access to Cookies.

* The encodeURIComponent is a function that helps keep the valid formating.

* Cookies have several options which can be provided after key=value

* Note:

  The name=value pair,after encodeURIComponent should not exceed 4KB.

  Total no of cookies per domain is limited to around 20+(exact number is 
  browser dependent 
 
 */

console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
