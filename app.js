// buttons
const engageSelectBtn = document.getElementById('engage-select'),
      buildSelectBtn  = document.getElementById('build-select'),
      generateBtn     = document.getElementById('generate'),
      clearBtn        = document.getElementById('clear-utms');

// button listeners
engageSelectBtn.addEventListener('click', engageDisplay);
buildSelectBtn.addEventListener('click', buildDisplay);
generateBtn.addEventListener('click', generateEmailTitles);
clearBtn.addEventListener('click', clearUTMs);

// url input
const urlInput = document.getElementById('url-input');

// url input listener
urlInput.addEventListener('blur', validURL);

// cta input
const ctaInput = document.getElementById('cta-url-input');

// cta switch
const ctaSwitch = document.getElementById('cta-toggle');

// engage stream title input
const engageTitle = document.getElementById('engage-title');
const engageTitleLabel = document.getElementById('engage-title-label');

// number of emails inputs
const numEmailsInput = document.getElementById('num-emails-input');

// listens for change in value of numEmailsInput
numEmailsInput.addEventListener('change', displayNumNameFields);

// base title input
const emailTitle = document.getElementById('email-title-1');
const emailTitleLabel = document.getElementById('email-title-1-label');

// list where extra email fields are inserted
var emailsList = document.getElementById("email-list");

// UTM output location
const outputDiv = document.getElementById('output');

// hidden output area where list of <p>s to be copied from are 'stored'
const hiddenOutput = document.getElementById('hidden-output');

// hidden lists
const hiddenHeaderList = document.getElementById('hidden-header-list'),
      hiddenFooterList = document.getElementById('hidden-footer-list'),
      hiddenImageList  = document.getElementById('hidden-image-list'),
      hiddenBodyList   = document.getElementById('hidden-body-list'),
      hiddenCTAList    = document.getElementById('hidden-cta-list'),
      hiddenSigList    = document.getElementById('hidden-sig-list');



// called when 'engage' is clicked
function engageDisplay() {

  // add/remove class for selection
  if (!engageSelectBtn.classList.contains('selected')) {
    engageSelectBtn.classList.toggle('selected');
    if (buildSelectBtn.classList.contains('selected')) {
      buildSelectBtn.classList.remove('selected');
    }
  }
  
  // display engage elements
  engageTitle.style.display = 'block';
  engageTitleLabel.style.display = 'inline';

  // apply border color to active button and remove from inactive
  engageSelectBtn.style.border = '1px solid #BC3339';
  buildSelectBtn.style.border = '1px solid #BBB';

  // clear emailNamesFormatted[]
  emailNamesFormatted = [];
  
}



// called when 'build' is clicked 
function buildDisplay() {

  // add/remove class for selection
  if (!buildSelectBtn.classList.contains('selected')) {
    buildSelectBtn.classList.toggle('selected');
    if (engageSelectBtn.classList.contains('selected')) {
      engageSelectBtn.classList.remove('selected');
    }
  }

  // hide engage elements
  engageTitle.style.display = 'none';
  engageTitleLabel.style.display = 'none';

  // apply border color to active button and remove from inactive
  buildSelectBtn.style.border = '1px solid #BC3339';
  engageSelectBtn.style.border = '1px solid #BBB';

  // clear emailNamesFormatted[]
  emailNamesFormatted = [];
  
}



// check validity of URL
function validURL() {
  if (urlInput.matches(':invalid')) {
    alert('The URL you have entered is invalid.');
  }
  if (ctaInput.matches(':invalid')) {
    alert('The URL you have entered is invalid.')
  }
}



// display appropriate number of email title fields
function displayNumNameFields() {

  // thanks for reading my code!
  if(Number(numEmailsInput.value) === 42) {
    document.body.innerHTML = "<h1 style='text-align:center;'>UNRESOLVED FINITE / INFINITE PARADOX ENCOUNTERED.</h1> <h1 style='text-align:center;'>YOU ARE NOT PREPARED TO ASCEND.</h1> <h1 style='text-align:center;'>DIMENSIONAL LOCK REINITIALIZING ...</h1>";
    function lockout() {
      setTimeout(function() {location.reload();}, 5000);
    }
    lockout();
    return;
  }

  // 'gotcha' for the cheeky ones
  if(numEmailsInput.value > 41) {
    alert("You don't need that many emails. Go ahead and click 'OK' - no fancy DOM-based alert message for you. That'll teach you to question my UX design.")
    numEmailsInput.value = 1;
  }

  // for the true trolls out there
  if(Number(numEmailsInput.value) === 0 || Number(numEmailsInput.value) < 0) {
    alert("Well, I guess your job is done, then.")
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
    <input type="text" name="email-title-${i}" id="email-title-${i}" data-lpignore="true">`;

    emailsList.appendChild(newEmail);
    
    newEmail.setAttribute('autocomplete', 'new-password')
  }

  // Remove redundant '1' from title input lable when only one email is needed
  if(Number(numEmailsInput.value) === 1) {
    document.getElementById('email-title-1-label').innerHTML = "TITLE";
  }

}



// live nodeList of all <li> tags
let emailNameList = document.getElementsByTagName('li');

// init array for formatted email names
let emailNamesFormatted = [];

// generate formatted email titles from input values
function generateEmailTitles() {

  // enforces selection of either BUILD or ENGAGE
  if (!buildSelectBtn.classList.contains('selected') && !engageSelectBtn.classList.contains('selected')) {
    alert('Please select either BUILD or ENGAGE.');
    return;
  }

  // init array for email name storage
  let emailNames = [];

  // pulls values out of nested inputs in emailNameList[]
  for (i=0; i<emailNameList.length; i++) {
    let nodeItem = emailNameList.item(i)

    emailNames.push(nodeItem.firstElementChild.nextSibling.nextSibling.value);
  }

  // formats names for URLs
  emailNames.forEach((name) => {

    // trim any silliness
    let nameTrimmed = name.trim();

    // replace spaces with hyphens
    let nameFormatted = nameTrimmed.replace(/ /g, "-");
    
    // .replace(/;/g, '%3B').replace(/,/g, '%2C').replace(/\//g, '%2F').replace(/\?/g, '%3F').replace(/:/g, '%3A').replace(/@/g, '%40').replace(/&/g, '%26').replace(/=/g, '%3D').replace(/\+/g, '%2B').replace(/\$/g, '%24').replace('.', '').replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/#/g, '%23');
    // You saw nothing...

    // URI encode (encodes special characters)
    let nameEncoded = escape(nameFormatted);

    emailNamesFormatted.push(nameEncoded);

  });
  
  generateUTMs();

}



// init UTM arrays
let headerUTMs = [],
    footerUTMs = [],
    imageUTMs  = [],
    bodyUTMs   = [],
    ctaUTMs    = [],
    sigUTMs    = [];

// generate UTM codes from provided params
function generateUTMs() {

  // reset UTM arrays to prevent multiple click duplication
  headerUTMs = [];
  footerUTMs = [];
  imageUTMs  = [];
  bodyUTMs   = [];
  ctaUTMs    = [];
  sigUTMs    = [];

  // reset hidden area
  hiddenHeaderList.innerHTML = '';
  hiddenFooterList.innerHTML = '';
  hiddenImageList.innerHTML  = '';
  hiddenBodyList.innerHTML   = '';
  hiddenCTAList.innerHTML    = '';
  hiddenSigList.innerHTML    = '';
  
  // enforce mandatory fields
  let urlInputValue = urlInput.value;
  let ctaInputValue = ctaInput.value;
  
  if (urlInputValue === '') {
    alert('Enter a URL.');
  } else if (ctaInputValue === '') {
    alert('Enter a CTA URL.');
  } 

  // enforce trailing / on URLs
  let urlInputLength = urlInputValue.length;
  let urlLastChar = urlInputValue.charAt(urlInputLength - 1);

  if(urlLastChar !== "/") {
    urlInputValue = urlInputValue + '/';
  }
  
  let ctaInputLength = ctaInputValue.length;
  let ctaLastChar = ctaInputValue.charAt(ctaInputLength - 1);
  if(ctaLastChar !== "/") {
    ctaInputValue = ctaInputValue + '/';
  }
  
  // check BUILD or ENGAGE and reassign var accordingly
  let typeCheck = "";

  if (buildSelectBtn.classList.contains('selected')) {
    typeCheck = "build-";
  } else {
    // grab engage stream title and to add to UTM
    let engageStreamTitle = engageTitle.value;
    let engageTitleTrimmed = engageStreamTitle.trim();
    let engageTitleFormatted = engageTitleTrimmed.replace(/ /g, "-");
    typeCheck = `engage-${engageTitleFormatted}-`;
  }

  // generate UTMs for header
  emailNamesFormatted.forEach((name) => {
    let newUTM = `${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=header`;
    headerUTMs.push(newUTM);
  });

  // generate UTMs for footer
  emailNamesFormatted.forEach((name) => {
    let newUTM = `${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=footer`;
    footerUTMs.push(newUTM);
  });
  
  // generate UTMs || CTA UTMs for image
  if (ctaSwitch.checked) {
    emailNamesFormatted.forEach((name) => {
      let newUTM = `${ctaInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=image`;
      imageUTMs.push(newUTM);
    });
  } else { 
    emailNamesFormatted.forEach((name) => {
      let newUTM = `${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=image`;
      imageUTMs.push(newUTM);
    });
  }
  
  // generate UTMs || CTA UTMs for body link
  if (ctaSwitch.checked) {
    emailNamesFormatted.forEach((name) => {
      let newUTM = `<a href="${ctaInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=body-link" target="_blank">`;
      bodyUTMs.push(newUTM);
    });
  } else {
    emailNamesFormatted.forEach((name) => {
      let newUTM = `<a href="${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=body-link" target="_blank">`;
      bodyUTMs.push(newUTM);
    });
  }

  // generate UTMs for CTA
  emailNamesFormatted.forEach((name) => {
    let newUTM = `${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=body`;
    ctaUTMs.push(newUTM);
  });
  
  // generate UTMs || CTA UTMs for signature
  if (ctaSwitch.checked) {
    emailNamesFormatted.forEach((name) => {
      let newUTM = `<a href="${ctaInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=signature" target="_blank">`;
      sigUTMs.push(newUTM);
    });
  } else {
    emailNamesFormatted.forEach((name) => {
      let newUTM = `<a href="${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=signature" target="_blank">`;
      sigUTMs.push(newUTM);
    });
  }

  // clear formatted names array to prevent duplication from multiple calls
  emailNamesFormatted = [];
  
  renderHiddenOutputs();

}



function renderHiddenOutputs() {

  // append hidden header utms to list
  headerUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <p id="header-utm-${i+1}-hidden">${utm}</p>`;

    hiddenHeaderList.appendChild(newHiddenOutput);
  });

  // append hidden footer utms to list
  footerUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <p id="footer-utm-${i+1}-hidden">${utm}</p>`;

    hiddenFooterList.appendChild(newHiddenOutput);
  });

  // append hidden image utms to list
  imageUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <p id="image-utm-${i+1}-hidden">${utm}</p>`;

    hiddenImageList.appendChild(newHiddenOutput);
  });

  // append hidden body utms to list
  bodyUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <p id="body-utm-${i+1}-hidden">${utm}</p>`;

    hiddenBodyList.appendChild(newHiddenOutput);
  });

  // append hidden cta utms to list
  ctaUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <p id="cta-utm-${i+1}-hidden">${utm}</p>`;

    hiddenCTAList.appendChild(newHiddenOutput);
  });

  // append hidden sig utms to list
  sigUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <p id="sig-utm-${i+1}-hidden">${utm}</p>`;

    hiddenSigList.appendChild(newHiddenOutput);
  });
  
}



// display generated UTM codes in DOM
function displayUTMs() {

  // display labels
  const displayLabels = document.getElementsByClassName('utm-display-label');
  for (i=0; i<displayLabels.length; i++) {
    displayLabels[i].style.display = 'block';
  }
}



// clear out generated UTMs
function clearUTMs() {
  headerUTMs = [];
  footerUTMs = [];
  imageUTMs = [];
  bodyUTMs = [];
  ctaUTMs = [];
  sigUTMs = [];
  console.log('c');

  // hide labels
  const displayLabels = document.getElementsByClassName('utm-display-label');
  for (i=0; i<displayLabels.length; i++) {
    displayLabels[i].style.display = 'none';
  }
}


