/* Question : 01 Create a navbar and change the color of its first element to red.*/
document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"

/* Question : 02 Create a table without tbody Now use "view page source" to check whether it has a tbody or not.

 The answer is no because view page source shows the raw source of it and tbody is autocorrected there. 

/* Question : 03  Create an element with 3 children.Now Change the color of first and last element to green.*/

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"

document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

/* Question : 04 Write a JavaScript code to change background of all <li> tags to cyan.
  Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan";
})  
