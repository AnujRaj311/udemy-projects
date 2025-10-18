
let submitBtn = document.querySelector('.btn');
let errorBtn = document.querySelector('.error');
let success = document.querySelector('.success');

submitBtn.addEventListener('click', function(){
    let msg = document.getElementById('message').value;
    if(!msg){
        errorBtn.classList.remove('hide-btn');
        success.classList.add('hide-msg');
        setTimeout(() => {
            errorBtn.classList.add('hide-btn');
        }, 1000);
    } else {
        errorBtn.classList.add('hide-btn');
        success.classList.remove('hide-msg');
        success.textContent = `"${msg}" - Your message is delivered!`
    }
})