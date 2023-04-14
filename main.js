const input = document.querySelector('#input');
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const result = document.querySelector('#result');

btnEncrypt.addEventListener('click', () => {
    encrypt(input.value);
});
