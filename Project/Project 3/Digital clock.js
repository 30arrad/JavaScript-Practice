console.log("Digital Clock");

const Time = document.querySelector('#clock');

setInterval( function() {
    let date = new Date();
// console.log(date);

Time.innerHTML = date.toLocaleTimeString();

}, 1000)
