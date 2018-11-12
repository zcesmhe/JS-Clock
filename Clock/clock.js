//Adding the minute ticks

for (var i = 0; i < 360; i+=30) {
    document.getElementById("svg-clock").innerHTML += '<line x1="300" y1="20" x2="300" y2="40" stroke="black" stroke-width="6" transform="rotate(' + i + ', 300, 300)"/>"'
}

//Adding second ticks

for (var i = 0; i < 360; i+=6) {
    document.getElementById("svg-clock").innerHTML += '<line x1="300" y1="20" x2="300" y2="30" stroke="black" stroke-width="3" transform="rotate(' + i + ', 300, 300)"/>"'
}

const SECONDHAND = document.getElementById("sec-hand");
const MINHAND = document.getElementById("min-hand");
const HOURHAND = document.getElementById("hour-hand");
const TITLE = document.getElementById("title");


function setTime() {
    
    var date = new Date();
    TITLE.innerHTML = "Current Time: " + date;
    
    var hoursAngle = (date.getHours() * 30) + ((date.getMinutes()/60) * 30);
    var minutesAngle = (date.getMinutes() * 6) + ((date.getSeconds()/60) * 6);
    var secondsAngle = (date.getSeconds() * 6);
    
    SECONDHAND.setAttribute("transform", "rotate(" + secondsAngle + ", 300, 300)")
    MINHAND.setAttribute("transform", "rotate(" + minutesAngle + ", 300, 300)")
    HOURHAND.setAttribute("transform", "rotate(" + hoursAngle + ", 300, 300)")
    
}

var interval = setInterval(setTime, 1000);