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

// display areas
const headerDisplay = document.getElementById('header-display'),
      footerDisplay = document.getElementById('footer-display'),
      imageDisplay  = document.getElementById('image-display'),
      bodyDisplay   = document.getElementById('body-display'),
      ctaDisplay    = document.getElementById('cta-display'),
      sigDisplay    = document.getElementById('sig-display');



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
    document.body.innerHTML = "<h1 style='text-align:center;'>UNRESOLVED FINITE / INFINITE PARADOX ENCOUNTERED.</h1><h1 style='text-align:center;'>YOU ARE NOT PREPARED TO ASCEND.</h1><h1 style='text-align:center;'>DIMENSIONAL LOCK REINITIALIZING ...</h1>";
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

  let nameArray = Array.from(emailNameList);

  nameArray.forEach((name, i) => {

  });

  // enforces selection of either BUILD or ENGAGE TURNON
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
  
  // enforce mandatory fields TURNON
  let urlInputValue = urlInput.value;
  let ctaInputValue = ctaInput.value;
  
  if (urlInputValue === '') {
    alert('Enter a URL.');
    return;
  } else if (ctaInputValue === '') {
    alert('Enter a CTA URL.');
    return;
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
      let newUTM = `\<a href="${ctaInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=body-link" target="_blank">`;
      bodyUTMs.push(newUTM);
    });
  } else {
    emailNamesFormatted.forEach((name) => {
      let newUTM = `\<a href="${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=body-link" target="_blank">`;
      bodyUTMs.push(newUTM);
    });
  }

  // generate UTMs for CTA
  emailNamesFormatted.forEach((name) => {
    let newUTM = `${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=CTA`;
    ctaUTMs.push(newUTM);
  });
  
  // generate UTMs || CTA UTMs for signature
  if (ctaSwitch.checked) {
    emailNamesFormatted.forEach((name) => {
      let newUTM = `\<a href="${ctaInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=signature" target="_blank">`;
      sigUTMs.push(newUTM);
    });
  } else {
    emailNamesFormatted.forEach((name) => {
      let newUTM = `\<a href="${urlInputValue}?utm_source=boomtime&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=signature" target="_blank">`;
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
    <textarea id="header-utm-${i+1}-hidden" class="header-utm header-output-${i+1}">${utm}</textarea>`;

    hiddenHeaderList.appendChild(newHiddenOutput);
  });

  // append hidden footer utms to list
  footerUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <textarea id="footer-utm-${i+1}-hidden" class="footer-utm footer-output-${i+1}">${utm}</textarea>`;

    hiddenFooterList.appendChild(newHiddenOutput);
  });

  // append hidden image utms to list
  imageUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <textarea id="image-utm-${i+1}-hidden" class="image-utm image-output-${i+1}">${utm}</textarea>`;

    hiddenImageList.appendChild(newHiddenOutput);
  });

  // append hidden body utms to list
  bodyUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <textarea id="body-utm-${i+1}-hidden" class="body-utm body-output-${i+1}">${utm}</textarea>`;

    hiddenBodyList.appendChild(newHiddenOutput);
  });

  // append hidden cta utms to list
  ctaUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <textarea id="cta-utm-${i+1}-hidden" class="cta-utm cta-output-${i+1}">${utm}</textarea>`;

    hiddenCTAList.appendChild(newHiddenOutput);
  });

  // append hidden sig utms to list
  sigUTMs.forEach((utm, i) => {
    newHiddenOutput = document.createElement('span');
    newHiddenOutput.innerHTML = `
    <textarea id="sig-utm-${i+1}-hidden" class="sig-utm sig-output-${i+1}">${utm}</textarea>`;

    hiddenSigList.appendChild(newHiddenOutput);
  });

  displayUTMs();
  
}



// listeners on button columns - click to copy UTM
const headerCol = document.getElementById('header-column'),
      footerCol = document.getElementById('footer-column'),
      imageCol  = document.getElementById('image-column'),
      bodyCol   = document.getElementById('body-column'),
      ctaCol    = document.getElementById('cta-column'),
      sigCol    = document.getElementById('sig-column');

headerCol.addEventListener('click', (e) => {
  e.preventDefault();
  let tar = String(e.target.id).charAt(14);
  let hiddenList = document.getElementsByClassName('header-utm');
  let hiddenArray = Array.from(hiddenList);
  hiddenArray.forEach((item, i) => {
    if (item.classList.contains(`header-output-${tar}`)) {
      let copyTar = document.getElementById(`header-utm-${i+1}-hidden`);
      let copyClasses = copyTar.classList;
      let copyClass = copyClasses.item(1);
      if (copyClass = String(copyTar.id)) {
        copyTar.focus({preventScroll: true});
        copyTar.select();
        document.execCommand('copy');
      } 
    }
  });
    

  
});

footerCol.addEventListener('click', (e) => {
  e.preventDefault();
  let tar = String(e.target.id).charAt(14);
  let hiddenList = document.getElementsByClassName('footer-utm');
  let hiddenArray = Array.from(hiddenList);
  hiddenArray.forEach((item, i) => {
    if (item.classList.contains(`footer-output-${tar}`)) {
      let copyTar = document.getElementById(`footer-utm-${i+1}-hidden`);
      let copyClasses = copyTar.classList;
      let copyClass = copyClasses.item(1);
      if (copyClass = String(copyTar.id)) {
        copyTar.focus({preventScroll: true});
        copyTar.select();
        document.execCommand('copy');
      } 
    }
  });
    
 
  
});

imageCol.addEventListener('click', (e) => {
  e.preventDefault();
  let tar = String(e.target.id).charAt(13);
  let hiddenList = document.getElementsByClassName('image-utm');
  let hiddenArray = Array.from(hiddenList);
  hiddenArray.forEach((item, i) => {
    if (item.classList.contains(`image-output-${tar}`)) {
      let copyTar = document.getElementById(`image-utm-${i+1}-hidden`);
      let copyClasses = copyTar.classList;
      let copyClass = copyClasses.item(1);
      if (copyClass = String(copyTar.id)) {
        copyTar.focus({preventScroll: true});
        copyTar.select();
        document.execCommand('copy');
      } 
    }
  });
    
  
  
});

bodyCol.addEventListener('click', (e) => {
  e.preventDefault();
  let tar = String(e.target.id).charAt(12);
  let hiddenList = document.getElementsByClassName('body-utm');
  let hiddenArray = Array.from(hiddenList);
  hiddenArray.forEach((item, i) => {
    if (item.classList.contains(`body-output-${tar}`)) {
      let copyTar = document.getElementById(`body-utm-${i+1}-hidden`);
      let copyClasses = copyTar.classList;
      let copyClass = copyClasses.item(1);
      if (copyClass = String(copyTar.id)) {
        copyTar.focus({preventScroll: true});
        copyTar.select();
        document.execCommand('copy');
      } 
    }
  });
    
  
  
});

ctaCol.addEventListener('click', (e) => {
  e.preventDefault();
  let tar = String(e.target.id).charAt(11);
  let hiddenList = document.getElementsByClassName('cta-utm');
  let hiddenArray = Array.from(hiddenList);
  hiddenArray.forEach((item, i) => {
    if (item.classList.contains(`cta-output-${tar}`)) {
      let copyTar = document.getElementById(`cta-utm-${i+1}-hidden`);
      let copyClasses = copyTar.classList;
      let copyClass = copyClasses.item(1);
      if (copyClass = String(copyTar.id)) {
        copyTar.focus({preventScroll: true});
        copyTar.select();
        document.execCommand('copy');
      } 
    }
  });
    
  
  
});

sigCol.addEventListener('click', (e) => {
  e.preventDefault();
  let tar = String(e.target.id).charAt(11);
  let hiddenList = document.getElementsByClassName('sig-utm');
  let hiddenArray = Array.from(hiddenList);
  hiddenArray.forEach((item, i) => {
    if (item.classList.contains(`sig-output-${tar}`)) {
      let copyTar = document.getElementById(`sig-utm-${i+1}-hidden`);
      let copyClasses = copyTar.classList;
      let copyClass = copyClasses.item(1);
      if (copyClass = String(copyTar.id)) {
        copyTar.focus({preventScroll: true});
        copyTar.select();
        document.execCommand('copy');
      } 
    }
  });
  
  

});
// footerCol
// imageCol 
// bodyCol  
// ctaCol   
// sigCol   

// display generated UTM codes in DOM
function displayUTMs() {

  // clear out previously displayed buttons 
  headerDisplay.innerHTML = '';
  footerDisplay.innerHTML = '';
  imageDisplay.innerHTML  = '';
  bodyDisplay.innerHTML   = '';
  ctaDisplay.innerHTML    = '';
  sigDisplay.innerHTML    = '';

  // render display column labels
  const displayLabels = document.getElementsByClassName('utm-display-label');
  for (i=0; i<displayLabels.length; i++) {
    displayLabels[i].style.display = 'block';
  }

  // append header utm buttons to div
  headerUTMs.forEach((utm, i) => {
    newOutput = document.createElement('div');
    newOutput.innerHTML = `
    <button class="output-item" id="header-output-${i+1}">${i+1}</button>`;

    headerDisplay.appendChild(newOutput);
  });

  // append footer utm buttons to div
  footerUTMs.forEach((utm, i) => {
    newOutput = document.createElement('div');
    newOutput.innerHTML = `
    <button class="output-item" id="footer-output-${i+1}">${i+1}</button>`;

    footerDisplay.appendChild(newOutput);
  });

  // append image utm buttons to div
  imageUTMs.forEach((utm, i) => {
    newOutput = document.createElement('div');
    newOutput.innerHTML = `
    <button class="output-item" id="image-output-${i+1}">${i+1}</button>`;

    imageDisplay.appendChild(newOutput);
  });

  // append body utm buttons to div
  bodyUTMs.forEach((utm, i) => {
    newOutput = document.createElement('div');
    newOutput.innerHTML = `
    <button class="output-item" id="body-output-${i+1}">${i+1}</button>`;

    bodyDisplay.appendChild(newOutput);
  });

  // append cta utm buttons to div
  ctaUTMs.forEach((utm, i) => {
    newOutput = document.createElement('div');
    newOutput.innerHTML = `
    <button class="output-item" id="cta-output-${i+1}">${i+1}</button>`;

    ctaDisplay.appendChild(newOutput);
  });

  // append sig utm buttons to div
  sigUTMs.forEach((utm, i) => {
    newOutput = document.createElement('div');
    newOutput.innerHTML = `
    <button class="output-item" id="sig-output-${i+1}">${i+1}</button>`;

    sigDisplay.appendChild(newOutput);
  });

//SCROLL HERE

}



// clear out generated UTMs
function clearUTMs() {
  headerUTMs = [];
  footerUTMs = [];
  imageUTMs  = [];
  bodyUTMs   = [];
  ctaUTMs    = [];
  sigUTMs    = [];
  console.log('c');

  // hide labels
  const displayLabels = document.getElementsByClassName('utm-display-label');
  for (i=0; i<displayLabels.length; i++) {
    displayLabels[i].style.display = 'none';
  }
}




