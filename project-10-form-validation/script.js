let form = document.querySelector('.form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passcheck = document.getElementById('passcheck');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    let usernameVal = username.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();
    let passcheckVal = passcheck.value.trim();

    // Username
    if (usernameVal === "") {
        setError(username, "Username cannot be empty");
    } else {
        setSuccess(username);
    }

    // Email
    if (emailVal === "") {
        setError(email, "Email cannot be empty");
    } else if (!isValidEmail(emailVal)) {
        setError(email, "Enter a valid email");
    } else {
        setSuccess(email);
    }

    // Password
    if (passwordVal === "") {
        setError(password, "Password cannot be empty");
    } else if (passwordVal.length < 6) {
        setError(password, "Password must be at least 6 characters");
    } else {
        setSuccess(password);
    }

    // Password Check
    if (passcheckVal === "") {
        setError(passcheck, "Password check cannot be empty");
    } else if (passcheckVal !== passwordVal) {
        setError(passcheck, "Passwords do not match");
    } else {
        setSuccess(passcheck);
    }
}

function setError(input, message) {
    let formElement = input.parentElement;
    let errorMsg = formElement.querySelector('.error');

    formElement.classList.remove('success');
    formElement.classList.add('failure');
    errorMsg.textContent = message;
    errorMsg.style.visibility = "visible";
}

function setSuccess(input) {
    let formElement = input.parentElement;
    let errorMsg = formElement.querySelector('.error');

    formElement.classList.remove('failure');
    formElement.classList.add('success');
    errorMsg.style.visibility = "hidden";
}

function isValidEmail(email) {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
