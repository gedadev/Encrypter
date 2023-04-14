const input = document.querySelector('#input');
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const result = document.querySelector('#result');

btnEncrypt.addEventListener('click', () => {
    encrypt(input.value);
});

function encrypt(msg) {
    const arrMsg = msg.toLowerCase().split('');
    arrMsg.forEach((letter, i) => {
        switch (letter) {
            case 'a':
                arrMsg[i] = 'ai';
                break;
            case 'e':
                arrMsg[i] = 'enter';
                break;
            case 'i':
                arrMsg[i] = 'imes';
                break;
            case 'o':
                arrMsg[i] = 'ober';
                break;
            case 'u':
                arrMsg[i] = 'ufat';
                break;
            default:
                break;
        }
    });
    return arrMsg.join('');
}