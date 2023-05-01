/* localStorage is a web Storage object which are not sent to server with each request.This data survives a full page refresh and even a full browser restart. 
* There are the methods provided by localStorage SetItem(key,value),getItem(key).removeItem(key),clear and many more.

* NOTE : 
=> Both Key and Values must be Strings.
=> We can use the two JSON methods to store objects in localStorage.*/






let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}

if (key == 0) {
        localStorage.clear()
}
