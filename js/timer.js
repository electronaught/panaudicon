const deadline = 'April 30 2025 23:59:59 GMT-0700';

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
       
        minutes = Math.floor(timer / 60000);
        seconds = Math.floor((timer % 60000)/1000);

        display.textContent = minutes + ":" + seconds;
        
         if (--timer > 0) {
              timer = Date.parse(deadline)-Date.now();
          }    
        
    }, 1000);
 
}

window.onload = function () {
    var remaining = Date.parse(deadline)-Date.now(),
        display = document.querySelector('#countdown');
    startTimer(remaining, display);
};