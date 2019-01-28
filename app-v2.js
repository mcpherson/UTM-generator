
const docsSelectBtn = document.getElementById('docs-select');
const darkSelectBtn = document.getElementById('dark-select');

docsSelectBtn.addEventListener('click', () => {

});

darkSelectBtn.addEventListener('click', () => {
  
});

// ERROR FIELDS
msgArea = document.getElementById('message');
msgText = document.getElementById('message-text')

// FADE ERROR IN/OUT
function displayMsg(e, i) {
  scrollTo(top);
  msgArea.focus();
  
  
  
  setTimeout(() => {
    msgArea.blur();

    // focus on invalid url input
    if (e.target.classList.contains('gen')) {

      // grab URL inputs
      let tarList = document.getElementsByClassName('url-input');
      let tarArray = Array.from(tarList);
      
      tarArray.forEach((item) => {
        if (item.classList.contains(`url-${i+1}`)) {
          
          item.focus();

        }
      });
    } else {

      e.target.focus();

    }
    
  }, 3000);
  
}

















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
  prefix.focus();

  // hide 'choose one'
  document.getElementById('choose').style.color = '#fff';

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

  // alter input
  prefix.removeAttribute('disabled');
  prefix.style.backgroundColor = '#fff';
  prefixLabel.style.color = 'black';
  prefixLabel.textContent = 'BUILD CATEGORY';
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

    numURLsInput.value = 1;

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
    
    msgText.textContent = "DOES NOT COMPUTE.";

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

function generateTitles() {

  // clear out previous titles
  titlesFormatted = [];

  // init array for email name storage
  let emailTitles = [];


  // pulls values out of nested inputs in titleList[]
  for (i=0; i<titleList.length; i++) {
    let nodeItem = titleList.item(i)

    emailTitles.push(nodeItem.value);
  }

  // formats names for URLs
  emailTitles.forEach((name) => {

    // trim any silliness
    let nameTrimmed = name.trim();

    // replace spaces with hyphens
    let nameFormatted = nameTrimmed.replace(/ /g, "-");
    
    // .replace(/;/g, '%3B').replace(/,/g, '%2C').replace(/\//g, '%2F').replace(/\?/g, '%3F').replace(/:/g, '%3A').replace(/@/g, '%40').replace(/&/g, '%26').replace(/=/g, '%3D').replace(/\+/g, '%2B').replace(/\$/g, '%24').replace('.', '').replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/#/g, '%23');
    // You saw nothing...

    // URI encode (encodes special characters)
    let nameEncoded = escape(nameFormatted);

    titlesFormatted.push(nameEncoded);

  });
  


}



// FORMAT AND STORE URLS BROKEN

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
  console.log(baseURLs);
  console.log(titlesFormatted);

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

      break;
    } else {
      
      let validURL = baseURLs[i];
      validURLs.push(validURL);

    }
  }
  // baseURLs.forEach((item, i) => {
    // var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    // '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    // '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    // '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    // '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    // '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    // if(!pattern.test(item)) {

    //   msgText.textContent = `URL ${i+1} IS INVALID.`;

    //   displayMsg(e);

    //   return false;
    // } else {
      
    //   let validURL = item;
    //   validURLs.push(validURL);

    // }
  // });

  if (baseURLs.length !== validURLs.length) {
    validURLs = [];
  }
  console.log(validURLs);
  // generateUTMs();

}






// GENERATE UTMS



// business name input
const businessInput = document.getElementById('business-input');
let businessName = businessInput.value;

// listener on URL list - generates UTMs from clicked GEN button
document.getElementById('urls').addEventListener('click', (e) => {

  // enforce required fields

  // enforces selection of either BUILD or ENGAGE TURNON
  // if (!buildSelectBtn.classList.contains('selected') && !engageSelectBtn.classList.contains('selected')) {
  //   
  //   DISPLAY ALERT
  //
  //   return;
  // }


  if (e.target.classList.contains('gen')) {
    
    generateTitles();

    formatURLs(e);
    
    

    // generateUTMs();

  }

});









// GENERATE UTM CODES

// init UTM object to store UTMs for each title (arrays)
let UTMStore = {};

// listens for click on <ul> to determine which URL to generate for
document.getElementById('urls').addEventListener('click', (e) => {

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
        let newUTM = `${validURLs[i]}?utm_source=${businessName}&utm_medium=email&utm_campaign=${typeCheck}${name}&utm_content=header`;
        UTMGroup.push(newUTM);
        UTMStore.push(UTMGroup);
      });
    }
  });

});