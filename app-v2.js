
const docsSelectBtn = document.getElementById('docs-select');
const darkSelectBtn = document.getElementById('dark-select');

docsSelectBtn.addEventListener('click', () => {

});

darkSelectBtn.addEventListener('click', () => {
  
});

// business name input
const businessInput = document.getElementById('business-input');
let businessName = businessInput.value;










// url input listener
// urlInput.addEventListener('blur', validURL);





// engage select button
const engageSelectBtn = document.getElementById('engage-select');

// engage stream title input
const engageTitle = document.getElementById('engage-title');
const engageTitleLabel = document.getElementById('engage-title-label');

// switch to engage behavior
engageSelectBtn.addEventListener('click', () => {

  // add/remove class for selection
  if (!engageSelectBtn.classList.contains('selected')) {
    engageSelectBtn.classList.toggle('selected');
    if (buildSelectBtn.classList.contains('selected')) {
      buildSelectBtn.classList.remove('selected');
    }
  }

  // apply border color to active button and remove from inactive
  engageSelectBtn.style.border = '1px solid #BC3339';
  buildSelectBtn.style.border = '1px solid #BBB';
  engageTitle.removeAttribute('disabled');
  engageTitle.style.backgroundColor = '#fff';
  engageTitleLabel.style.color = 'black';

  // clear titlesFormatted[]
  titlesFormatted = [];

});



// build select button
const buildSelectBtn  = document.getElementById('build-select');

// switch to build behavior
buildSelectBtn.addEventListener('click', () => {

  // add/remove class for selection
  if (!buildSelectBtn.classList.contains('selected')) {
    buildSelectBtn.classList.toggle('selected');
    if (engageSelectBtn.classList.contains('selected')) {
      engageSelectBtn.classList.remove('selected');
    }
  }

  // apply border color to active button and remove from inactive
  buildSelectBtn.style.border = '1px solid #BC3339';
  engageSelectBtn.style.border = '1px solid #BBB';
  engageTitle.setAttribute('disabled', true);
  engageTitle.value = '';
  engageTitle.style.backgroundColor = '#d1d1d1';
  engageTitleLabel.style.color = '#d1d1d1';

  // clear titlesFormatted[]
  titlesFormatted = [];

});



// number of emails input
const numEmailsInput = document.getElementById('num-emails-input');
numEmailsInput.value = 1;

// base title input
const emailTitle = document.getElementById('title-1');
const emailTitleLabel = document.getElementById('title-1-label');

// lists where extra title fields are inserted
var titlesList = document.getElementById("titles");

// adds new title fields to list
numEmailsInput.addEventListener('change', () => {

  // thanks for reading my code!
  if (Number(numEmailsInput.value) === 42) {
    document.body.innerHTML = "<h1 style='text-align:center;'>UNRESOLVED FINITE / INFINITE PARADOX ENCOUNTERED.</h1><h1 style='text-align:center;'>YOU ARE NOT PREPARED TO ASCEND.</h1><h1 style='text-align:center;'>DIMENSIONAL LOCK REINITIALIZING ...</h1>";
    function lockout() {
      setTimeout(function() {location.reload();}, 5000);
    }
    lockout();
    return;
  }

  // 'gotcha' for the cheeky ones
  if(numEmailsInput.value > 41) {
    
    // DISPLAY ALERT

    numEmailsInput.value = 1;
  }

  // for the true trolls out there
  if (Number(numEmailsInput.value) === 0 || Number(numEmailsInput.value) < 0) {
    
    // DISPLAY ALERT

    numEmailsInput.value = 1;
  }
  
  // clear title inputs to prevent duplication
  while (titlesList.hasChildNodes()) {
    titlesList.removeChild(titlesList.lastChild);
  }

  // adds new inputs to DOM depending on value of numEmailsInput
  for (i=1; i<((Number(numEmailsInput.value)) + 1); i++) {

    newTitle = document.createElement('li');
    newTitle.innerHTML = `
    <label for="title-${i}" id="title-${i}-label">TITLE ${i}</label>
    <input type="text" name="title-${i}" id="title-${i}" data-lpignore="true" autocomplete="nope">`;
    
    newTitle.setAttribute('class', 'title');

    titlesList.appendChild(newTitle);
    
  }

  // Remove redundant '1' from title input label when only one email is needed
  if (Number(numEmailsInput.value) === 1) {
    document.getElementById('title-1-label').innerHTML = "TITLE";
  }

});



// number of URLs input
const numURLsInput = document.getElementById('num-urls-input');
numURLsInput.value = 1;

// base URL input
const urlInput = document.getElementById('url-1');
const urlLabel = document.getElementById('url-1-label');

// list where extra URL fields are inserted
var URLs = document.getElementById("urls");

// adds new URL fields to list
numURLsInput.addEventListener('change', () => {

  // thanks for reading my code!
  if (Number(numURLsInput.value) === 42) {
    document.body.innerHTML = "<h1 style='text-align:center;'>UNRESOLVED FINITE / INFINITE PARADOX ENCOUNTERED.</h1><h1 style='text-align:center;'>YOU ARE NOT PREPARED TO ASCEND.</h1><h1 style='text-align:center;'>DIMENSIONAL LOCK REINITIALIZING ...</h1>";
    function lockout() {
      setTimeout(function() {location.reload();}, 5000);
    }
    lockout();
    return;
  }

  // 'gotcha' for the cheeky ones
  if(numURLsInput.value > 41) {
    
    // DISPLAY ALERT

    numURLsInput.value = 1;
  }

  // for the true trolls out there
  if (Number(numURLsInput.value) === 0 || Number(numURLsInput.value) < 0) {
    
    // DISPLAY ALERT

    numURLsInput.value = 1;
  }
  
  // clear URL inputs to prevent duplication
  while (URLs.hasChildNodes()) {
    URLs.removeChild(URLs.lastChild);
  }

  // adds new inputs to DOM depending on value of numURLsInput
  for (i=1; i<((Number(numURLsInput.value)) + 1); i++) {

    newURL = document.createElement('li');
    newURL.innerHTML = `
      <label for="url-${i}" id="url-${i}-label">URL ${i}</label>
      <div class="row">
        <input type="url" name="url-${i}" id="url-${i}" class="url-input" data-lpignore="true" autocomplete="nope">
        <input type="button" id="gen-${i}" class="gen" value="GEN">
      </div>`;
    
    newURL.setAttribute('class', 'url');

    URLs.appendChild(newURL);
    
  }

  // Remove redundant '1' from URL input label when only one URL is needed
  if (Number(numURLsInput.value) === 1) {
    document.getElementById('url-1-label').innerHTML = "URL";
  }

});



// generate UTMs

// live nodeList of all title <li> tags
let titleList = document.getElementsByClassName('title');

// init array for formatted email names
let titlesFormatted = [];

// listener on URL list - generates UTMs from clicked GEN button
document.getElementById('urls').addEventListener('click', (e) => {

  if (e.target.classList.contains('gen')) {
    
    // generate/format email titles

    // let titleArray = Array.from(titleList);

    // enforces selection of either BUILD or ENGAGE TURNON
    // if (!buildSelectBtn.classList.contains('selected') && !engageSelectBtn.classList.contains('selected')) {
    //   alert('Please select either BUILD or ENGAGE.');
    //   return;
    // }

    // init array for email name storage
    let emailTitles = [];

    // pulls values out of nested inputs in titleList[]
    for (i=0; i<titleList.length; i++) {
      let nodeItem = titleList.item(i)
  
      emailTitles.push(nodeItem.firstElementChild.nextElementSibling.value);
    }

    // formats names for URLs
    emailTitles.forEach((title) => {

      // trim any silliness
      let titleTrimmed = title.trim();

      // replace spaces with hyphens
      let titleFormatted = titleTrimmed.replace(/ /g, "-");
      
      // .replace(/;/g, '%3B').replace(/,/g, '%2C').replace(/\//g, '%2F').replace(/\?/g, '%3F').replace(/:/g, '%3A').replace(/@/g, '%40').replace(/&/g, '%26').replace(/=/g, '%3D').replace(/\+/g, '%2B').replace(/\$/g, '%24').replace('.', '').replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/#/g, '%23');
      // You saw nothing...

      // URI encode (encodes special characters)
      let titleEncoded = escape(titleFormatted);

      titlesFormatted.push(titleEncoded);

    });

    console.log(titlesFormatted);
    // generateUTMs();

  }

});



// live nodeList of all url <li> tags
let URLList = document.getElementsByClassName('url');

let urlArray = Array.from(URLList);

// init array for  url storage
let urls = [];

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
  // let urlInputValue = urlInput.value;
  // let ctaInputValue = ctaInput.value;
  
  // if (urlInputValue === '') {
  //   alert('Enter a URL.');
  //   return;
  // } else if (ctaInputValue === '') {
  //   alert('Enter a CTA URL.');
  //   return;
  // } else if (businessName === '') {
  //   alert('Enter your business\'s name.');
  //   return;
  // }

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

    if (engageTitle.value != '') {
      // grab engage stream title and to add to UTM
      let engageStreamTitle = engageTitle.value;
      let engageTitleTrimmed = engageStreamTitle.trim();
      let engageTitleFormatted = engageTitleTrimmed.replace(/ /g, "-");
      typeCheck = `engage-${engageTitleFormatted}-`;

      } else {
      
      typeCheck = `engage-`;
    }
  }

  

  // generate UTMs for header
  titlesFormatted.forEach((name) => {
    let newUTM = `${urlInputValue}?utm_source=${businessName}&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=header`;
    headerUTMs.push(newUTM);
  });

  // generate UTMs for footer
  titlesFormatted.forEach((name) => {
    let newUTM = `${urlInputValue}?utm_source=${businessName}&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=footer`;
    footerUTMs.push(newUTM);
  });
  
  // generate UTMs for image
  titlesFormatted.forEach((name) => {
    let newUTM = `${urlInputValue}?utm_source=${businessName}&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=image`;
    imageUTMs.push(newUTM);
  });
  
  
  // generate UTMs for body link
  titlesFormatted.forEach((name) => {
    let newUTM = `\<a href="${urlInputValue}?utm_source=${businessName}&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=body-link" target="_blank">`;
    bodyUTMs.push(newUTM);
  });
  

  // generate UTMs for CTA
  titlesFormatted.forEach((name) => {
    let newUTM = `${urlInputValue}?utm_source=${businessName}&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=CTA`;
    ctaUTMs.push(newUTM);
  });
  
  // generate UTMs for signature
  titlesFormatted.forEach((name) => {
    let newUTM = `\<a href="${urlInputValue}?utm_source=${businessName}&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=signature" target="_blank">`;
    sigUTMs.push(newUTM);
  });
  

  // clear formatted names array to prevent duplication from multiple calls
  titlesFormatted = [];

  window.scroll(0,10000);
  
  renderHiddenOutputs();

}