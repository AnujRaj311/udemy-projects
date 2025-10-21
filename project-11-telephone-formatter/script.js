let phone = document.getElementById('phone');
let firstThreeNumber = '';
let previousVal = '';

phone.addEventListener('input', function() {
    let phoneVal = phone.value.trim();
    

    if(phoneVal.length == 4 && (previousVal.length < phoneVal.length)) {
        firstThreeNumber = phoneVal.substring(0, 3);
        phone.value = `+(${firstThreeNumber}) - ${phoneVal[phoneVal.length-1]}`
    } 
    previousVal = phoneVal;
})