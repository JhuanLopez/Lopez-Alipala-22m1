document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});


document.getElementById('showConfirmPassword').addEventListener('change', function() {
    const confirmPasswordField = document.getElementById('confirmPassword');
    if (this.checked) {
        confirmPasswordField.type = 'text';
    } else {
        confirmPasswordField.type = 'password';
    }
});
  
document.getElementById('signupForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault();
        return;
    }
});
