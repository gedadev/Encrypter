const input = document.querySelector('#input');
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const result = document.querySelector('#result');
const p = document.createElement('p');

btnEncrypt.addEventListener('click', () => {
    p.textContent = encrypt(input.value);
    result.appendChild(p);
});

btnDecrypt.addEventListener('click', () => {
    p.textContent = decrypt(input.value);
    result.appendChild(p);
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

function decrypt(msg) {
    if (/ai/.test(msg)) msg = msg.split('ai').join('a');
    if (/enter/.test(msg)) msg = msg.split('enter').join('e');
    if (/imes/.test(msg)) msg = msg.split('imes').join('i');
    if (/ober/.test(msg)) msg = msg.split('ober').join('o');
    if (/ufat/.test(msg)) msg = msg.split('ufat').join('u');
    return msg;
}
