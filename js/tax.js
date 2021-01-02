// The Time And Date Function
function jsTime() {
    'use strict';
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    document.getElementById('time').innerHTML = year + " - " + month + " - " + day + " | " + hour + " : " + min + " : " + sec;
}
window.onload = function () {
    'use strict';
    setInterval(jsTime, 500);
};




// The Charge Function
var charge = document.getElementById('charge'),
    calc = document.getElementById('calc-tax'),
    result = document.getElementById('result');

calc.onclick = function () {
    'use strict';
    var tax = charge.value * 0.30,
        val = charge.value - tax;

    result.textContent = val + "EG";
};
