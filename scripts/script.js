const output = document.querySelector('.output');
const userVal = document.querySelector('input[name="name"]');
const btn = document.querySelector('button');

userVal.style.borderColor = 'black';

btn.onclick = ()=> {
    if(userVal.value.length > 3) {
        const message = `Hello, ${userVal.value}!`;
        userVal.style.borderColor = 'black';
        output.textContent = message;
    } else {
        output.textContent = 'Name length must be more than 3 characters';
        userVal.style.borderColor = 'red';
    }
}