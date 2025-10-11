let weight = document.querySelector('#weight');
let weightPounds = document.querySelector('.pounds');

document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const weightVal = Number(weight.value.trim());

    if (isNaN(weightVal) || weightVal <= 0) {
      weightPounds.textContent = 'Please enter a valid number!.';
      weightPounds.classList.remove('hidden');
      //setTimeout for reverting the original state
      setTimeout(()=> {
        weight.value = '';
        weightPounds.classList.add('hidden');
      }, 2500);

    } else {
      weightPounds.textContent = `Weight in pounds: ${(weightVal * 2.20462).toFixed(2)} lbs`;
      weightPounds.classList.remove('hidden');
    }
  }
});