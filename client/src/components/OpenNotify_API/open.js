var request = new XMLHttpRequest()

request.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&n=5', true)

request.onload = function () {
    var data = JSON.parse(this.response)
    var arr = []

    if (request.status >= 200 && request.status < 400) {
       Object.keys(data).forEach( (k) => {
           console.log(data[k])
           arr.push(data[k])
       });
    }
    else {
        console.log ('error')
    }

    var obj = [] // Contains ISS passover time objects
    Object.keys(arr[2]).forEach( (n) => {
        console.log(arr[2].[n])
        obj.push(arr[2].[n]) 
    });

    // Printing out duration and risetime for each object
    obj.forEach( (element) => {
        console.log("duration: " + element.duration + " risetime: " + element.risetime)
    });
    
}

request.send ()

const rp = require('request-promise')
function open_notify_request(lat, lon) {
    return rp({
        
    })
}