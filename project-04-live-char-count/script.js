let text = document.querySelector('#textarea');
let count = document.querySelector('.count');

function countChars() {
    let countVal = text.value.length;
    count.textContent = countVal;
}