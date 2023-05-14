function validateForm() {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Fetch form inputs
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate Full Name
  if (fullName.length < 5) {
    showError('fullNameError', 'Name must be at least 5 characters long.');
    return;
  }

  // Validate Email
  if (!email.includes('@')) {
    showError('emailError', 'Enter a valid email address.');
    return;
  }

  // Validate Phone Number
  if (phoneNumber.length !== 10 || phoneNumber === '123456789' || phoneNumber === '1234567890') {
    showError('phoneNumberError', 'Enter a valid 10-digit phone number.');
    return;
  }

  // Validate Password
  if (password.length < 8 || password === 'password' || password === fullName) {
    showError('passwordError', 'Password must be at least 8 characters long and cannot be "password" or your name.');
    return;
  }

  // Validate Confirm Password
  if (password !== confirmPassword) {
    showError('confirmPasswordError', 'Passwords do not match.');
    return;
  }

  // If all validations pass, submit the form
  document.getElementById('registrationForm').submit();
}

function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = errorMessage;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = '';
  }
}

// Add event listener to form submit
document.getElementById('registrationForm').addEventListener('submit', validateForm);
