// buttons
const engageSelect = document.getElementById('engage-select');
const buildSelect = document.getElementById('build-select');
const generate = document.getElementById('generate');

// button listeners
engageSelect.addEventListener('click', engageDisplay);
buildSelect.addEventListener('click', buildDisplay);
generate.addEventListener('click', generateUTMs);

// engage stream title input
const engageTitle = document.getElementById('engage-title');
const engageTitleLabel = document.getElementById('engage-title-label');

// number of emails inputs
const numEmailsInput = document.getElementById('num-emails-input');
const numEmailsLabel = document.getElementById('num-emails-label');

// listens for change in value of numEmailsInput
numEmailsInput.addEventListener('change', displayNumNameFields);

// base title input
const emailTitle = document.getElementById('email-title-1');
const emailTitleLabel = document.getElementById('email-title-1-label');

// list where extra email fields are inserted
var emailsList = document.getElementById("email-list");



// called when 'engage' is clicked
function engageDisplay() {
  
  // display engage elements
  engageTitle.style.display = 'block';
  engageTitleLabel.style.display = 'inline';
  
  // display appropriate number of name fields
  displayNumNameFields();
}



// called when 'build' is clicked 
function buildDisplay() {

  // hide engage elements
  engageTitle.style.display = 'none';
  engageTitleLabel.style.display = 'none';
  
  // display appropriate number of name fields
  displayNumNameFields();
}



// display appropriate number of email title fields
function displayNumNameFields() {

  // 'gotcha' for the cheeky ones
  if(numEmailsInput.value > 42) {
    alert("You don't need that many emails.")
    numEmailsInput.value = 1;
  }
  
  // clear name inputs to prevent duplication
  while(emailsList.hasChildNodes()) {
    emailsList.removeChild(emailsList.lastChild);
  }

  // adds new inputs to DOM depending on value of numEmailsInput
  for (i=1; i<((Number(numEmailsInput.value)) + 1); i++) {

    newEmail = document.createElement('li');
    newEmail.innerHTML = `
    <label for="email-title-${i}" id="email-title-${i}-label">TITLE ${i}</label>
    <input type="text" name="email-title-${i}" id="email-title-${i}">`;

    emailsList.appendChild(newEmail);
    
  }

  // Remove redundant '1' from title input lable when only one email is needed
  if(Number(numEmailsInput.value) === 1) {
    document.getElementById('email-title-1-label').innerHTML = "TITLE";
  }

}



// generate UTM codes from input values
function generateUTMs() {

}



// display generated UTM codes in DOM
function displayUTMs() {

}
