let weight = document.querySelector('#weight');
let weightPounds = document.querySelector('.pounds');

document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const weightVal = Number(weight.value.trim());

    if (isNaN(weightVal) || weightVal <= 0) {
      weightPounds.textContent = 'Please enter valid number.';
      weightPounds.classList.remove('hidden');
    } else {
      weightPounds.textContent = `Weight in pounds: ${(weightVal * 2.20462).toFixed(2)} lbs`;
      weightPounds.classList.remove('hidden');
    }
  }
});