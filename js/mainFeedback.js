'use strict';

let inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.style.border = '1px solid #bbbbbb';
        document.querySelector(`.${input.name}-error`).innerHTML = '';
        validate(input);
    });
});

let btn = document.querySelector('.feedback-button');
btn.addEventListener('click', () => {
    let rezult;
    inputs.forEach(input => {
        rezult = validate(input);
    });
    if (rezult) {
        alert('Ваше сообщение успешно отправлено!');
    }
});