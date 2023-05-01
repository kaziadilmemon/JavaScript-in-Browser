/*  JavaScript can be used to send and returns information from the network when needed(AJAX).

Fetch API : 

Getting a response is a 2-Stage process.

1.  An Object of Response class containing "Status" and "OK" properties.
      Status - The http status code, eg.200
      OK - boolean, true if the HTTP status code is 200-299.

2.  After that we needed to call another method to access the body in different formats:

response.text() -> Read and return the text.
response.json() -> Parse the response as json

Note : We can use only one body.reading method example if we have already got the response with response.text() then response.json() wont work.

The response headers are available in response.headers

 */

let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})


let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => { 
        return response.json()
}).then((response) => {
        console.log(response)
})
