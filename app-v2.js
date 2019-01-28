const docsSelectBtn = document.getElementById('docs-select');
const darkSelectBtn = document.getElementById('dark-select');

docsSelectBtn.addEventListener('click', () => {

});

darkSelectBtn.addEventListener('click', () => {
  
});



// DISPLAY ERROR MESSAGE

// error fields
msgArea = document.getElementById('message');
msgText = document.getElementById('message-text')

function displayMsg(e, i) {

  scrollTo(top);

  // init CSS transition in
  msgArea.focus();
  
  // init CSS transition out
  setTimeout(() => {
    msgArea.blur();

    if (e) {

      // focus on invalid url input after error
      if (e.target.classList.contains('gen')) {

        let tarList = document.getElementsByClassName('url-input');
        let tarArray = Array.from(tarList);
        
        tarArray.forEach((item) => {
          if (item.classList.contains(`url-${i+1}`)) {
            
            item.focus();

          }
        });

      } else {

        // focus on event source element
        e.target.focus();

      }
    }
  }, 3000);
  
}



// SELECT ENGAGE BEHAVIOR

// engage select button
const engageSelectBtn = document.getElementById('engage-select');

// engage stream title input
const prefix = document.getElementById('prefix');
const prefixLabel = document.getElementById('prefix-label');

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

  // alter input
  prefix.removeAttribute('disabled');
  prefix.style.backgroundColor = '#fff';
  prefixLabel.style.color = 'black';
  prefixLabel.textContent = 'ENGAGE STREAM';
  prefix.value = '';
  prefix.focus();

  // hide 'choose one'
  document.getElementById('choose').style.color = '#fff';

});



// SELECT BUILD BEHAVIOR

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

  // alter input
  prefix.removeAttribute('disabled');
  prefix.style.backgroundColor = '#fff';
  prefixLabel.style.color = 'black';
  prefixLabel.textContent = 'BUILD CATEGORY';
  prefix.value = '';
  prefix.focus();

  // hide 'choose one'
  document.getElementById('choose').style.color = '#ffffff';

});



// INSERT/REMOVE NEW TITLE FIELDS

// number of emails input
const numEmailsInput = document.getElementById('num-emails-input');
numEmailsInput.value = 1;

// base title input
const emailTitle = document.getElementById('title-1');
const emailTitleLabel = document.getElementById('title-1-label');

// lists where extra title fields are inserted
var titlesList = document.getElementById("titles");

// adds new title fields to list
numEmailsInput.addEventListener('change', (e) => {

  // thanks for reading my code!
  if (Number(numEmailsInput.value) === 42) {
    
    msgText.textContent = "YOU ARE NOT PREPARED.";

    displayMsg(e);

    numEmailsInput.value = 1;

    return;

  }

  // 'gotcha' for the cheeky ones
  if(numEmailsInput.value > 41) {
    
    msgText.textContent = "*mindtrick* YOU DON'T NEED THAT MANY EMAILS.";

    displayMsg(e);

    numEmailsInput.value = 1;
  }

  // for the true trolls out there
  if (Number(numEmailsInput.value) === 0 || Number(numEmailsInput.value) < 0) {
    
    msgText.textContent = "LOOKS LIKE YOUR WORK HERE IS DONE.";

    displayMsg(e);

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
    <input type="text" name="title-${i}" id="title-${i}" class="title" data-lpignore="true" autocomplete="nope">`;

    titlesList.appendChild(newTitle);
    
  }

  // Remove redundant '1' from title input label when only one email is needed
  if (Number(numEmailsInput.value) === 1) {
    document.getElementById('title-1-label').innerHTML = "TITLE&nbsp;&nbsp;";
  }

});



// INSERT/REMOVE NEW URLS FIELDS

// number of URLs input
const numURLsInput = document.getElementById('num-urls-input');
numURLsInput.value = 1;

// base URL input
const urlInput = document.getElementById('url-1');
const urlLabel = document.getElementById('url-1-label');

// list where extra URL fields are inserted
var URLs = document.getElementById("urls");

// adds new URL fields to list
numURLsInput.addEventListener('change', (e) => {

  // thanks for reading my code!
  if (Number(numURLsInput.value) === 42) {
    
    msgText.textContent = "YOU ARE NOT PREPARED.";

    displayMsg(e);

    numURLsInput.value = 1;

    return;

  }

  // 'gotcha' for the cheeky ones
  if(numURLsInput.value > 41) {
    
    msgText.textContent = "AREN'T YOU GOING A BIT OVERBOARD?";

    displayMsg(e);

    numURLsInput.value = 1;
    
  }

  // for the true trolls out there
  if (Number(numURLsInput.value) === 0 || Number(numURLsInput.value) < 0) {
    
    msgText.textContent = "KINDA DEFEATS THE PURPOSE...";

    displayMsg(e);

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
      <label for="url-${i}" id="url-${i}-label">URL ${i}<pre>&#9;</pre>&nbsp;&nbsp;</label>
      <div class="row">
        <input type="url" name="url-${i}" id="url-${i}" class="url-input url-${i}" data-lpignore="true" autocomplete="nope">
        <input type="button" id="gen-${i}" class="gen" value="GEN">
      </div>`;
    
    newURL.setAttribute('class', 'url');

    URLs.appendChild(newURL);
    
  }

  // Remove redundant '1' from URL input label when only one URL is needed
  if (Number(numURLsInput.value) === 1) {
    document.getElementById('url-1-label').innerHTML = "URL<pre>&#9;</pre>&nbsp;&nbsp;";
  }

});



// GENERATE TITLES

// live nodeList of all title <input> tags
let titleList = document.getElementsByClassName('title');

// init array for formatted email names
let titlesFormatted = [];

function generateTitles(e) {

  // clear out previous titles
  titlesFormatted = [];

  // init array for email name storage
  let emailTitles = [];


  // pulls values out of nested inputs in titleList[]
  for (i=0; i<titleList.length; i++) {
    let nodeItem = titleList.item(i)

    emailTitles.push(nodeItem.value.toLowerCase());
  }

  // grab prefix value for insertion
  let prefixRaw = prefix.value.toUpperCase();
  let prefixText = prefixRaw.trim();
  let prefixFormatted = prefixText.replace(/ /g, "-");
  let prefixEncoded = escape(prefixFormatted);

  if (buildSelectBtn.classList.contains('selected')) {

    let prefixType = 'BUILD-';

    // formats names for URLs
    emailTitles.forEach((name) => {

      // trim any silliness
      let nameTrimmed = name.trim();

      // replace spaces with hyphens
      let nameFormatted = nameTrimmed.replace(/ /g, "-");

      // URI encode (encodes special characters)
      let nameEncoded = escape(nameFormatted);

      // add prefix string
      let nameComplete = `${prefixType}${prefixEncoded}-${nameEncoded}`;

      titlesFormatted.push(nameComplete);

    });

  } else if (engageSelectBtn.classList.contains('selected')) {

    let prefixType = 'ENGAGE-';

    // formats names for URLs
    emailTitles.forEach((name) => {

      // trim any silliness
      let nameTrimmed = name.trim();

      // replace spaces with hyphens
      let nameFormatted = nameTrimmed.replace(/ /g, "-");

      // URI encode (encodes special characters)
      let nameEncoded = escape(nameFormatted);

      // add prefix string
      let nameComplete = `${prefixType}${prefixEncoded}-${nameEncoded}`;

      titlesFormatted.push(nameComplete);

    });
    
  } else {

    msgText.textContent = `SELECT BUILD OR ENGAGE.`;

    displayMsg();

  }

  generateUTMs(e);

}



// FORMAT AND STORE URLS

// init array for url storage
let validURLs = [];

// grab all active URL inputs
let urlList = document.getElementsByClassName('url-input');

function formatURLs(e) {

  // unvalidated URLs
  let baseURLs = [];

  // reset arrays to prevent duplication
  baseURLs = [];
  validURLs = [];

  // check validity and store
  for (i=0; i<urlList.length; i++) {
    let nodeItem = urlList.item(i);

    baseURLs.push(nodeItem.value);
  }

  // validate URL (from stackoverflow)
  for (i=0; i<baseURLs.length; i++) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if(!pattern.test(baseURLs[i])) {

      msgText.textContent = `URL ${i+1} IS INVALID.`;

      displayMsg(e, i);

      baseURLs = [];
      validURLs = [];
      return;
    } else {
      
      let validURL = baseURLs[i];

      // enforce trailing / on URLs
      let urlLastChar = validURL.charAt(validURL.length - 1);
      if(urlLastChar !== "/") {
        validURL = validURL + '/';
      }
      validURLs.push(validURL);

    }
  }

  // reset validURLs if something went wrong
  if (baseURLs.length !== validURLs.length) {
    validURLs = [];
  }
 
  generateTitles(e);

}



// GENERATE UTM CODES

// business name input
const businessInput = document.getElementById('business-input');
let businessName = businessInput.value;

// listener on URL list - generates UTMs from clicked GEN button
document.getElementById('urls').addEventListener('click', (e) => {

  if (e.target.classList.contains('gen')) {

    UTMStore = [];
    
    // begins the chain (URLs -> titles -> UTMs)
    formatURLs(e);

  }

});

// init UTM array to store UTMs for each title (arrays)
let UTMStore = [];

// arrays of UTM content locations/terms
const UTMContent = ['header', 'footer', 'image', 'body-link', 'CTA', 'signature'];
const UTMTerms = ['HDR', 'FTR', 'IMG', 'BDY', 'CTA', 'SIG'];

function generateUTMs(e) {

  // grab last character of clicked ID
  let clicked = String(e.target.id);
  let lastChar = clicked.charAt(clicked.length-1);

  // grab all active URL inputs
  let inputList = document.getElementsByClassName('url-input');
  let inputArray = Array.from(inputList);

  // generate UTMs for clicked URL
  inputArray.forEach((item, i) => {
    if (item.classList.contains(`url-${lastChar}`)) {
      titlesFormatted.forEach((name) => {
        let UTMGroup = [];

        UTMContent.forEach((item) => {
          
          let newUTM = '';

          switch (item) {
            case 'body-link':
              newUTM = `<a href="${validURLs[i]}?utm_source=${businessName}&utm_medium=email&utm_campaign=${name}&utm_content=${item}" target="_blank">`;
              UTMGroup.push(newUTM);
              break;
            case 'signature':
              newUTM = `<a href="${validURLs[i]}?utm_source=${businessName}&utm_medium=email&utm_campaign=${name}&utm_content=${item}" target="_blank">`;
              UTMGroup.push(newUTM);
              break;
            default:
              newUTM = `${validURLs[i]}?utm_source=${businessName}&utm_medium=email&utm_campaign=${name}&utm_content=${item}`;
              UTMGroup.push(newUTM);
              break;
          }
          
        });

        UTMStore.push(UTMGroup);

      });
    }
  });

  generateHiddenOutputs();

};



// GENERATE HIDDEN OUTPUTS

// hidden UTM output
const hiddenOutput = document.getElementById('hidden-output');

function generateHiddenOutputs() {

  // reset hidden outputs
  hiddenOutput.innerHTML = '';

  // dig into UTMs to generate storage
  UTMStore.forEach((item, inc) => {
    
    // add new title row
    let newRow = document.createElement('pre');
    newRow.id = `hidden-utms-${inc+1}`;
    newRow.style.display = 'block';
    hiddenOutput.appendChild(newRow);

    // add UTMs to new title row
    item.forEach((item, i) => {

      let insertRow = document.getElementById(`hidden-utms-${inc+1}`);
      let newText = document.createElement('textarea');
      newText.classList.add(`hidden-utms-${i+1}-${UTMContent[i]}`);
      newText.textContent = `${item}`
      insertRow.appendChild(newText);
      
    });
  });

  generateButtons();

}



// GENERATE UTM COPY BUTTONS

// div for insertion
const outputArea = document.getElementById('output-area');

function generateButtons() {

  // reset outputs
  outputArea.innerHTML = '';

  // dig into UTMs to generate buttons
  UTMStore.forEach((item, inc) => {
    
    // add new title row
    let newRow = document.createElement('div');
    newRow.id = `utms-${inc+1}`;
    newRow.classList.add('row', 'push-down');
    // newRow.style.display = 'block';
    outputArea.appendChild(newRow);

    // add UTM buttons to new title row
    item.forEach((item, i) => {

      let insertRow = document.getElementById(`utms-${inc+1}`);
      let newDiv = document.createElement('div');
      newDiv.classList.add('two', 'columns');
      newDiv.innerHTML = `
        <button id="${UTMTerms[i]}-btn-${i+1}" class="utm-btn ${UTMTerms[i]}">${UTMTerms[i]} ${inc+1}</button>`;
      insertRow.appendChild(newDiv);
      console.log('fuck');
    });



  });

  // display scroll top button
  scrollTop.style.display = 'block';

  window.scroll(0, 10000);
  // generateButtons();

}



// SCROLL TO TOP

const scrollTop = document.getElementById('scroll-top');

scrollTop.addEventListener('click', () => {
  window.scroll(0, -10000);
});

