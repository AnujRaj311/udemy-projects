let btn = document.querySelector('.btn');
let popup = document.querySelector('.popup');
let close = document.querySelector('.fa-xmark')

btn.addEventListener('click', function() {
    popup.classList.remove('hidden');
    btn.classList.add('hidden');

})

close.addEventListener('click', function() {
    popup.classList.add('hidden');
    btn.classList.remove('hidden');
})