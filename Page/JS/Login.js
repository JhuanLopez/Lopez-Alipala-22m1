document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (!username || !password) {
        alert('Please fill out all fields.');
        return;
    }

    if (username !== registeredUsername) {
        alert('Username does not match.');
        return;
    }

    if (password !== registeredPassword) {
        alert('Password does not match.');
        return;
    }

    alert('Welcome to Soule');
    window.location.href = 'Page/Home.html';
});
