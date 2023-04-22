/* If We assign something to elem.className, it replaces the whole String of classes.Often we want to add/remove/toggle a Single Class. */

first.className = "text-black red"
//elem.classlist.add/remove("class") : Add/removes a class.
first.classList.add("red")
first.classList.remove("red")

//elem.classlist.contains("class") : Checks for the given class, returns true/false.
first.classList.contains("red")

//elem.classlist.toggle("class") : Adds the class if it doesn't exist, otherwise removes it
first.classList.toggle("red")

