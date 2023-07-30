// Get the form by its ID
const form = document.getElementById('signup-form');

// Get the password and confirmation fields
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');

// Get the error message element
const errorMessage = document.getElementById('error-message');

// Listen for form submit event
form.addEventListener('submit', function(event) {
    // Clear the error message
    errorMessage.textContent = '';

    // Validate the form
    let errors = [];
    
    // Check if all fields are filled
    for (let i = 0; i < form.elements.length; i++) {
        if (!form.elements[i].value) {
            errors.push('All fields must be filled out.');
            break;
        }
    }
    
    // Check if the passwords match
    if (password.value !== confirmPassword.value) {
        errors.push('Passwords do not match.');
    }

    // If there were errors, show them and prevent form submission
    if (errors.length > 0) {
        errorMessage.textContent = errors.join(' ');
        event.preventDefault();
    }
});
