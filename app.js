// type select buttons
const engageSelect = document.getElementById('engage-select');
const buildSelect = document.getElementById('build-select');

// type select button listeners
engageSelect.addEventListener('click', engageDisplay);
buildSelect.addEventListener('click', buildDisplay);

// engage stream title input
const engageTitle = document.getElementById('engage-title');
const engageTitleLabel = document.getElementById('engage-title-label');

// number of engage emails inputs
const numEngageEmailsInput = document.getElementById('num-engage-emails-input');
const numEngageEmailsLabel = document.getElementById('num-engage-emails-label');

// listens for change in value of numEngageEmailsInput
numEngageEmailsInput.addEventListener('change', displayNumEngageFields);

// number of build emails inputs
const numBuildEmailsInput = document.getElementById('num-build-emails-input');
const numBuildEmailsLabel = document.getElementById('num-build-emails-label');

// listens for change in value of numBuildEmailsInput
numBuildEmailsInput.addEventListener('change', displayNumBuildFields);

// called when 'engage' is selected
function engageDisplay() {
  
  // add and remove classes from respective buttons
  engageSelect.setAttribute('class', 'selected')
  buildSelect.removeAttribute('class');
  
  // display engage elements
  numEngageEmailsInput.style.display = 'block';
  numEngageEmailsLabel.style.display = 'inline';
  engageTitle.style.display = 'block';
  engageTitleLabel.style.display = 'inline';

  // hide build elements
  numBuildEmailsInput.style.display = 'none';
  numBuildEmailsLabel.style.display = 'none';
  
  // display appropriate number of name fields
  displayNumEngageFields();
}

// called when 'build' is selected 
function buildDisplay() {

  console.log('test');

  // add and remove classes from respective buttons
  buildSelect.setAttribute('class', 'selected')
  engageSelect.removeAttribute('class');
  
  // display build elements
  numBuildEmailsInput.style.display = 'block';
  numBuildEmailsLabel.style.display = 'inline';

  // hide engage elements
  numEngageEmailsInput.style.display = 'none';
  numEngageEmailsLabel.style.display = 'none';
  engageTitle.style.display = 'none';
  engageTitleLabel.style.display = 'none';
  
  // display appropriate number of name fields
  displayNumBuildFields();
}

function displayNumEngageFields() {

}

function displayNumBuildFields() {

}