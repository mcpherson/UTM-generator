// type select buttons
const engageSelect = document.getElementById('engage-select');
const buildSelect = document.getElementById('build-select');

// type select button listeners
engageSelect.addEventListener('click', engageDisplay);
buildSelect.addEventListener('click', buildDisplay);

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



// array of new email entries to be added
var newEmailEntries = [];

// display appropriate number of name fields
function displayNumNameFieldss() {

  // remove number from label for 1 email
  if(numEmailsInput.value == 1) {
    emailTitleLabel.innerHTML = "TITLE";
  } else {
    emailTitleLabel.innerHTML = "TITLE 1"
  }

  // 'gotcha' for the cheeky ones
  if(numEmailsInput.value > 42) {
    alert("You don't need that many emails.")
  }

  // list where extra email fields are inserted
  var emailsList = document.getElementById("email-list");

  // cuts array down to specified number of emails
  newEmailEntries.length = ((numEmailsInput.value) - 1);

  // display defined number of name fields
  newEmailEntries.forEach(function(newEmailEntry) {
  console.log('t');
    // create new <li> to append to
    let newEmail = document.createElement("li");

    let i = 2

    let newNameInput = `
    <label for="email-title-${i}" id="email-title-${i}-label">TITLE ${i}</label>
    <input type="text" name="email-title-${i}" id="email-title-${i}">`;

    // appends defined number of entries to array
    newEmailEntries.push(newNameInput);

    // set content of new <li>
    newEmail.innerHTML = newEmailEntries[i];

    // append <li> to <ul>
    emailsList.appendChild(newEmail);

    i++;
  });

  
}



function displayNumNameFields() {

  // 'gotcha' for the cheeky ones
  if(numEmailsInput.value > 42) {
    alert("You don't need that many emails.")
  }

  // list where extra email fields are inserted
  var emailsList = document.getElementById("email-list");
  
  // clear name inputs to prevent duplication
  while(emailsList.hasChildNodes()) {
    emailsList.removeChild(emailsList.lastChild);
  }

  // adds new inputs depending on value of numEmailsInput
  for (i=1; i<((Number(numEmailsInput.value)) + 1); i++) {

    newEmail = document.createElement('li');
    newEmail.innerHTML = `
    <label for="email-title-${i}" id="email-title-${i}-label">TITLE ${i}</label>
    <input type="text" name="email-title-${i}" id="email-title-${i}">`;

    emailsList.appendChild(newEmail);
    
  }

}

