/* All event is a signal that something has happened.All the DOM nodes generate such signals.

* Mouse events : click,contextmenu(right click), mouseover/mouseout.
* Keyboard events : Keydown and Keyup
* Form elements events : Submit, focus,etc
* Document events : DOM control loaded. */

let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}

// Adding a handler with javascript overwrites the existing handler.
