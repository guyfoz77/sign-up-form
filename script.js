const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (e) => {
    inputs.forEach(input => {
        input.addEventListener('invalid', (e) => {
            input.classList.add('invalid');
            console.log(input);
        })
    });
});