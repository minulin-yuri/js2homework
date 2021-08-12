'use strict';

const validate = (block) => {
    let data = document.querySelector(`#${block.id}`);
    if (block.id == 'message') {
        return true;
    }
    if (block.value == '') {
        block.style.border = "1px solid red";
        document.querySelector(`.${block.id}-error`).innerHTML = '<p>Заполните поле</p>';
    } else {
        if (block.id == 'name') {
            if (/^[a-z]+$/i.test(block.value)) {
                return true;
            } else {
                block.style.border = "1px solid red";
                document.querySelector(`.${block.id}-error`).innerHTML = '<p>В стороке имени должны быть только латинские буквы</p>';
                return false;
            }
        } else if (block.id == 'phone') {
            if (/^\+7\(\d{3}\)\d{3}-\d{4}$/i.test(block.value)) {
                return true;
            } else {
                block.style.border = "1px solid red";
                document.querySelector(`.${block.id}-error`).innerHTML = '<p> Телефон в формате +7(000)000-0000.</p>';
                return false;
            }
        } else if (block.id == 'email') {
            if (/^[a-z]{1,10}[.-]?[a-z]+@[a-z]{1,10}.[a-z]{2,5}$/i.test(block.value)) {
                return true;
            } else {
                block.style.border = "1px solid red";
                document.querySelector(`.${block.id}-error`).innerHTML = '<p>  E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.</p>';
                return false;
            }
        }
    }

}