const inputs = document.querySelectorAll('input');

const submitButton = document.querySelector('input[type="submit"]');
const passwordConfirm = document.querySelector('#passwordConfirm');
const password = document.querySelector('#password');

function passwordChecker() { //checks if passwords match, will style differently if they do not.
    if (password.value != passwordConfirm.value) {
        passwordConfirm.classList.add('invalid');
        submitButton.disabled = true;
    } else {
        passwordConfirm.classList.remove('invalid');
        submitButton.disabled = false;
    }
}

submitButton.addEventListener('click', () => {
    inputs.forEach(input => {
        input.addEventListener('invalid', () => {
            input.classList.add('invalid');
        })
    });
});

passwordConfirm.addEventListener('blur', () => passwordChecker());
password.addEventListener('blur', () => passwordChecker());