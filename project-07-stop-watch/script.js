let seconds = document.querySelector('.seconds');
let milliseconds = document.querySelector('.milliseconds');
let interval;
let ms = 0;
let s = 0;

function start() {
    clearInterval(interval); 
    interval = setInterval(runTimer, 10);
}

function runTimer() {
    ms++;
    if (ms >= 100) {
        ms = 0;
        s++;
    }

    milliseconds.innerHTML = ms < 10 ? "0" + ms : ms;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    ms = 0;
    s = 0;
    seconds.innerHTML = "00";
    milliseconds.innerHTML = "00";
}
