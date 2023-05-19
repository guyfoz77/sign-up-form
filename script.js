const inputs = document.querySelectorAll('input');

const submitButton = document.querySelector('input[type="submit"]');
const passwordConfirm = document.querySelector('#passwordConfirm');

submitButton.addEventListener('click', () => {
    inputs.forEach(input => {
        input.addEventListener('invalid', () => {
            input.classList.add('invalid');
            console.log(input);
        })
    });
});

// passwordConfirm.addEventListener('blur', ())