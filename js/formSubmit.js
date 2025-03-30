

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

    return false;
});



function resetFields() {
    const nameField= document.getElementById('name');
    console.log(nameField)
    nameField.value='0000'
    console.log(nameField);
    document.getElementById('email').textContent = '';
}
