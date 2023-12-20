const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submit = document.querySelector('.submit');

confirmPasswordInput.addEventListener("input", () => {
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    if (confirmPasswordValue !== passwordValue) {
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');
    } else {
        passwordInput.classList.remove('error');
        confirmPasswordInput.classList.remove('error');
    }
});