const deadline = 'April 30 2025 23:59:59 GMT-0700';

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
       
        minutes = Math.floor(timer / 60000);
        seconds = Math.floor((timer % 60000)/1000);

        //zero pad digits below 10
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

         if (--timer > 0) {
              timer = Date.parse(deadline)-Date.now();
          }    
        
    }, 1000);
 
}

function init(display){
    var loop = 0;
    var id = setInterval(function () {
        
        if (loop>15){
            clearInterval(id)
        }

        var rsec=Math.floor(Math.random()*60)
        var rmin=Math.floor(Math.random()*90000)+10000

        rsec = rsec < 10 ? "0" + rsec : rsec;

        display.textContent = rmin + ":" + rsec;
       loop++;
    }, 100);
}



window.onload = function () {
    display = document.querySelector('#countdown');
    init(display);
    var remaining = Date.parse(deadline)-Date.now();
    startTimer(remaining, display);
};