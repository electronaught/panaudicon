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

// scripts.js


var form = document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        
        // You can also submit the form here using AJAX or similar methods
        resetFields();
    }
});



function resetFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}
