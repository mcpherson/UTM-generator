const engageCheck = document.querySelector('#engage-select');
const buildCheck = document.querySelector('#build-select');

function listeners() {
  engageCheck.addEventListener('click', checkEngage);
}

listeners();

function checkEngage() {
  const numEngageInput = document.querySelector('#num-emails-input');
  const numEngageLabel = document.querySelector('#num-emails-label');
  if (engageCheck.checked == true) {
    numEngageInput.style.display = 'inline';
    numEngageLabel.style.display = 'inline';
  } else {
    numEngageInput.style.display = 'none';
    numEngageLabel.style.display = 'none';
  }
}


