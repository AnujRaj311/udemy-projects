let incr = document.querySelector('.increase');
let decr = document.querySelector('.decrease');
let val = document.querySelector('.value');
let circle = document.querySelector('.circle');

let count = 0;

incr.addEventListener('click', function() {
    count++;
    val.textContent = count;
    if(count>0) {
        circle.style.border = '2px solid #008000';
    } else if (count == 0) {
        circle.style.border = '2px solid #ABDCFF';
    }else {
        circle.style.border = '2px solid red';

    }
})

decr.addEventListener('click', function() {
    count--;
    val.textContent = count;
    if(count>0) {
        circle.style.border = '2px solid #008000';
    } else if (count == 0) {
        circle.style.border = '2px solid #ABDCFF';
    }
    else {
        circle.style.border = '2px solid red';

    }
})