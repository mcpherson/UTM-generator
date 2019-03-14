const docsSelectBtn = document.getElementById('docs-select');
const darkSelectBtn = document.getElementById('dark-select');

docsSelectBtn.addEventListener('click', () => {

});

// darkSelectBtn.addEventListener('click', () => {
  
// });



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
    msgText.textContent = '';

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



// SELECT BEHAVIOR

// behavior select buttons
const buildSelectBtn  = document.getElementById('build-select'),
      engageSelectBtn = document.getElementById('engage-select'),
      fbSelectBtn     = document.getElementById('fb-select'),
      otherSelectBtn  = document.getElementById('other-select');

// prefix input/label
const prefix      = document.getElementById('prefix'),
      prefixLabel = document.getElementById('prefix-label');

// fb ad controls
const fbControls = document.getElementById('fb-controls');

// fb ad type
const fbAdType = document.getElementById('fb-ad-type');

// button container
document.getElementById('selectors').addEventListener('click', (e) => {

  switch (e.target.id) {
    case 'build-select':
      // set selected class for other operations
      if (!buildSelectBtn.classList.contains('selected')) {
        buildSelectBtn.classList.toggle('selected');
      }
      engageSelectBtn.classList.remove('selected');
      otherSelectBtn.classList.remove('selected');
      fbSelectBtn.classList.remove('selected');

      // apply border color to active button and remove from inactive
      buildSelectBtn.style.border = '1px solid #BC3339';
      engageSelectBtn.style.border = '1px solid #BBB';
      otherSelectBtn.style.border = '1px solid #BBB';
      fbSelectBtn.style.border = '1px solid #BBB';

      // alter inputs
      prefixLabel.textContent = 'BUILD CATEGORY (e.g. NEWSLETTER)';
      emailTitleLabel.innerHTML = 'TITLE&nbsp;&nbsp;';
      numEmailsLabel.innerHTML = 'NUMBER OF EMAILS';
      fbControls.style.display = 'none';
      break;
    case 'engage-select':
      if (!engageSelectBtn.classList.contains('selected')) {
        engageSelectBtn.classList.toggle('selected');
      }
      buildSelectBtn.classList.remove('selected');
      otherSelectBtn.classList.remove('selected');
      fbSelectBtn.classList.remove('selected');

      engageSelectBtn.style.border = '1px solid #BC3339';
      buildSelectBtn.style.border = '1px solid #BBB';
      otherSelectBtn.style.border = '1px solid #BBB';
      fbSelectBtn.style.border = '1px solid #BBB';

      prefixLabel.textContent = 'ENGAGE STREAM (e.g. INTRO)';
      emailTitleLabel.innerHTML = 'TITLE&nbsp;&nbsp;';
      numEmailsLabel.innerHTML = 'NUMBER OF EMAILS';
      fbControls.style.display = 'none';
      break;
    case 'fb-select':
      if (!fbSelectBtn.classList.contains('selected')) {
        fbSelectBtn.classList.toggle('selected');
      }
      engageSelectBtn.classList.remove('selected');
      buildSelectBtn.classList.remove('selected');
      otherSelectBtn.classList.remove('selected');

      fbSelectBtn.style.border = '1px solid #BC3339';
      engageSelectBtn.style.border = '1px solid #BBB';
      buildSelectBtn.style.border = '1px solid #BBB';
      otherSelectBtn.style.border = '1px solid #BBB';

      prefixLabel.textContent = 'CAMPAIGN NAME (e.g. "Recruitment Feb 2019")';
      emailTitleLabel.innerHTML = 'CTA TEXT&nbsp;&nbsp;';
      numEmailsLabel.innerHTML = 'NUMBER OF SLIDES';
      fbControls.style.display = 'block';
      break;
    case 'other-select':
      if (!otherSelectBtn.classList.contains('selected')) {
        otherSelectBtn.classList.toggle('selected');
      }
      engageSelectBtn.classList.remove('selected');
      buildSelectBtn.classList.remove('selected');
      fbSelectBtn.classList.remove('selected');

      otherSelectBtn.style.border = '1px solid #BC3339';
      engageSelectBtn.style.border = '1px solid #BBB';
      buildSelectBtn.style.border = '1px solid #BBB';
      fbSelectBtn.style.border = '1px solid #BBB';

      prefixLabel.textContent = 'OTHER IDENTIFIER';
      emailTitleLabel.innerHTML = 'TITLE&nbsp;&nbsp;';
      numEmailsLabel.innerHTML = 'NUMBER OF EMAILS';
      fbControls.style.display = 'none';
      break;
    default:

      return;
  }

  // case-independent changes
  prefix.removeAttribute('disabled');
  prefix.style.backgroundColor = '#fff';
  prefixLabel.style.color = 'black';
  prefix.value = '';
  prefix.focus();
  // hide 'choose one'
  document.getElementById('choose').style.color = '#ffffff';
});



// INSERT/REMOVE NEW TITLE FIELDS

// number of emails input/label
const numEmailsInput = document.getElementById('num-emails-input');
numEmailsInput.value = 1;
const numEmailsLabel = document.getElementById('num-emails-label');

// base title input
const emailTitle = document.getElementById('title-1');
const emailTitleLabel = document.getElementById('title-1-label');

// lists where extra title fields are inserted
var titlesList = document.getElementById("titles");

// adds new title fields to list
numEmailsInput.addEventListener('change', (e) => {

  // thanks for reading my code!
  if (Number(numEmailsInput.value) === 42) {
    
    msgText.textContent = "WHAT IS INFINITY TO THE FINITE?";

    displayMsg(e);

    numEmailsInput.value = 1;

    return;
  }

  // almost got me...
  if (numEmailsInput.value.toString() === '') {

    msgText.textContent = "WHO YOU FINNA TRY?";

    displayMsg(e);

    numEmailsInput.value = 1;

    return;
  }

  // 'gotcha' for the cheeky ones
  if(numEmailsInput.value > 20) {
    
    msgText.textContent = "*mindtrick* YOU DON'T NEED THAT MANY EMAILS.";

    displayMsg(e);

    numEmailsInput.value = 1;

    return;
  }

  // for the true trolls out there
  if (Number(numEmailsInput.value) === 0 || Number(numEmailsInput.value) < 0) {
    
    msgText.textContent = "LOOKS LIKE YOUR WORK HERE IS DONE.";

    displayMsg(e);

    numEmailsInput.value = 1;

    return;
  }
  
  // clear title inputs to prevent duplication
  while (titlesList.hasChildNodes()) {
    titlesList.removeChild(titlesList.lastChild);
  }

  // adds new inputs to DOM depending on value of numEmailsInput
  if (fbSelectBtn.classList.contains('selected')) {

    for (i=1; i<((Number(numEmailsInput.value)) + 1); i++) {

      newTitle = document.createElement('li');
      newTitle.innerHTML = `
      <label for="title-${i}" id="title-${i}-label">CTA TEXT ${i}</label>
      <input type="text" name="title-${i}" id="title-${i}" class="title" data-lpignore="true" autocomplete="nope">`;

      titlesList.appendChild(newTitle);
      
    }

    // Remove redundant '1' from title input label when only one email is needed
    if (Number(numEmailsInput.value) === 1) {
      document.getElementById('title-1-label').innerHTML = "CTA TEXT&nbsp;&nbsp;";
    }

  } else {

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
    
    msgText.textContent = "TO KNOW ALL, YOU MUST UNDERSTAND NOTHING.";

    displayMsg(e);

    numURLsInput.value = 1;

    return;
  }

  // almost got me...
  if (numURLsInput.value.toString() === '') {

    msgText.textContent = "KEEP TRYING...";

    displayMsg(e);

    numURLsInput.value = 1;

    return;
  }

  // 'gotcha' for the cheeky ones
  if(numURLsInput.value > 20) {
    
    msgText.textContent = "AREN'T YOU GOING A BIT OVERBOARD?";

    displayMsg(e);

    numURLsInput.value = 1;

    return;
  }

  // for the true trolls out there
  if (Number(numURLsInput.value) === 0 || Number(numURLsInput.value) < 0) {
    
    msgText.textContent = "KINDA DEFEATS THE PURPOSE...";

    displayMsg(e);

    numURLsInput.value = 1;

    return;
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
        <input type="url" name="url-${i}" id="url-${i}" class="url-input url-${i}" data-lpignore="true" autocomplete="nope" placeholder="CAUTION: NO VALIDATION">
        <input type="button" id="gen-${i}" class="gen" value="GEN" tabindex="-1">
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

  // prefix type value
  let prefixType = '';

  // pulls values out of inputs in titleList[]
  for (i=0; i<titleList.length; i++) {
    let nodeItem = titleList.item(i)

    emailTitles.push(nodeItem.value.toLowerCase());
  }

  // grab prefix value for insertion
  let prefixRaw = prefix.value.toLowerCase();
  let prefixText = prefixRaw.trim();
  let prefixFormatted = prefixText.replace(/ /g, "-");
  let prefixEncoded = escape(prefixFormatted);

  if (buildSelectBtn.classList.contains('selected')) {
    prefixType = 'Build-';
  } else if (engageSelectBtn.classList.contains('selected')) {
    prefixType = 'Engage-';
  } else if (otherSelectBtn.classList.contains('selected')) {
    prefixType = '';
  } else if (fbSelectBtn.classList.contains('selected')) {
    prefixType = '';
  } else {
    msgText.textContent = `SELECT A CAMPAIGN TYPE.`;
    displayMsg();
    return;
  }

  // formats names for URLs
  emailTitles.forEach((name) => {

    // trim any sillyness
    let nameTrimmed = name.trim();

    // replace spaces with hyphens
    let nameFormatted = nameTrimmed.replace(/ /g, "-");

    // URI encode (encodes special characters)
    let nameEncoded = escape(nameFormatted);

    // add prefix string
    let nameComplete = '';
    if (fbSelectBtn.classList.contains('selected')) {
      nameComplete = `${nameEncoded}`;
    } else if (prefixEncoded == '') {
      nameComplete = `${prefixType}${nameEncoded}`;
    } else {
      nameComplete = `${prefixType}${prefixEncoded}-${nameEncoded}`;
    }

    titlesFormatted.push(nameComplete);

  });
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
    // validURLs.push(nodeItem.value);
  }

  // validate URL (from stackoverflow)
  for (i=0; i<baseURLs.length; i++) {
    // var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    // '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    // '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    // '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    // '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    // '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    // if(!pattern.test(baseURLs[i])) {

    //   msgText.textContent = `URL ${i+1} IS INVALID.`;

    //   displayMsg(e, i);

    //   baseURLs = [];
    //   validURLs = [];
    //   return;
    // } else {
      
      let validURL = baseURLs[i];

      // enforce trailing / on URLs
      let urlLastChar = validURL.charAt(validURL.length - 1);
      if(urlLastChar !== "/") {
        validURL = validURL + '/';
      }
      validURLs.push(validURL);

    // }
  }

  // reset validURLs if something went wrong
  if (baseURLs.length !== validURLs.length) {
    validURLs = [];
  }
 
  generateTitles(e);

}



// GENERATE UTM CODES

// business name input
// const businessInput = document.getElementById('business-input');
// let businessName = businessInput.value;

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

    // check for FB ADS toggle
    if (fbSelectBtn.classList.contains('selected')) {

      // grab prefix value for insertion
      let prefixRaw = prefix.value.toLowerCase();
      let prefixText = prefixRaw.trim();
      let prefixFormatted = prefixText.replace(/ /g, "-");
      let prefixEncoded = escape(prefixFormatted);

      // generates UTMs only for clicked ID
      if (item.classList.contains(`url-${lastChar}`)) {
        titlesFormatted.forEach((name, inc) => {

          switch (fbAdType.value) {
            case 'STATIC':

              newUTM = `${validURLs[i]}?utm_source=boomtime&utm_medium=FB-ad-static&utm_campaign=${prefixEncoded}&utm_content=${name}`;
              UTMStore.push(newUTM);
              break;

            case 'BOOST':

              newUTM = `${validURLs[i]}?utm_source=boomtime&utm_medium=FB-ad-boost&utm_campaign=${prefixEncoded}&utm_content=${name}`;
              UTMStore.push(newUTM);
              break;

            case 'VIDEO':

              newUTM = `${validURLs[i]}?utm_source=boomtime&utm_medium=FB-ad-video&utm_campaign=${prefixEncoded}&utm_content=${name}`;
              UTMStore.push(newUTM);
              break;

            case 'CAROUSEL':

              if (inc+1 == titlesFormatted.length && inc !== 0) {
                newUTM = `${validURLs[i]}?utm_source=boomtime&utm_medium=FB-ad-carousel&utm_campaign=${prefixEncoded}&utm_content=${name}-Final_slide`;
                UTMStore.push(newUTM);
              } else {
                newUTM = `${validURLs[i]}?utm_source=boomtime&utm_medium=FB-ad-carousel&utm_campaign=${prefixEncoded}&utm_content=${name}-Slide_${inc+1}`;
                UTMStore.push(newUTM);
              }

              break;

            case 'LEAD':

              newUTM = `${validURLs[i]}?utm_source=boomtime&utm_medium=FB-ad-lead&utm_campaign=${prefixEncoded}&utm_content=${name}`;
              UTMStore.push(newUTM);
              break;

            default:

              break;
          }
        });
      }

    // non-FB UTMs
    } else {

      if (item.classList.contains(`url-${lastChar}`)) {
        titlesFormatted.forEach((name) => {
          let UTMGroup = [];

          UTMContent.forEach((item) => {
            
            let newUTM = '';

            switch (item) {
              case 'body-link':
                newUTM = `<a href="${validURLs[i]}?utm_source=boomtime&utm_medium=email&utm_campaign=${name}&utm_content=${item}" target="_blank">`;
                UTMGroup.push(newUTM);
                break;
              case 'signature':
                newUTM = `<a href="${validURLs[i]}?utm_source=boomtime&utm_medium=email&utm_campaign=${name}&utm_content=${item}" target="_blank">`;
                UTMGroup.push(newUTM);
                break;
              default:
                newUTM = `${validURLs[i]}?utm_source=boomtime&utm_medium=email&utm_campaign=${name}&utm_content=${item}`;
                UTMGroup.push(newUTM);
                break;
            }
            
          });

          UTMStore.push(UTMGroup);

        });
      }
    }
  });

  // generateHiddenOutputs();
  generateButtons();

};



// GENERATE UTM COPY BUTTONS

// scroll to top button
const scrollTop = document.getElementById('scroll-top');

scrollTop.addEventListener('click', () => {
  window.scroll(0, -10000);
});

// click to copy headline

const clickCopy = document.getElementById('click-copy');

// div for insertion
const outputArea = document.getElementById('output-area');

function generateButtons() {

  // reset outputs
  outputArea.innerHTML = '';

  // dig into UTMs to generate buttons
  UTMStore.forEach((item, inc) => {
    
    if (fbSelectBtn.classList.contains('selected')) {

      // add new title row
      let newRow = document.createElement('div');
      newRow.id = `utms-${inc+1}`;
      newRow.classList.add('row', 'push-down');
      // newRow.style.display = 'block';
      outputArea.appendChild(newRow);

      // add UTM buttons to new title row
      let insertRow = document.getElementById(`utms-${inc+1}`);
      let newDiv = document.createElement('div');
      newDiv.classList.add('twelve', 'columns');
      if (titleList.length === 1) {
        newDiv.innerHTML = `
        <button id="fb-btn-${inc+1}" class="fb-utm-btn">${fbAdType.value} UTM (${titlesFormatted[inc]})</button>`;
      } else {
        newDiv.innerHTML = `
        <button id="fb-btn-${inc+1}" class="fb-utm-btn">${fbAdType.value} UTM ${inc+1} (${titlesFormatted[inc]})</button>`;
      }
      insertRow.appendChild(newDiv);   
    } else {

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
        if (titleList.length === 1) {
          newDiv.innerHTML = `
          <button id="${UTMTerms[i]}-btn-${inc+1}" class="utm-btn ${UTMTerms[i]}">${UTMTerms[i]}</button>`;
        } else {
          newDiv.innerHTML = `
          <button id="${UTMTerms[i]}-btn-${inc+1}" class="utm-btn ${UTMTerms[i]}">${UTMTerms[i]} ${inc+1}</button>`;
        }
        insertRow.appendChild(newDiv);
      });
    }
  });

  // display click to copy/scroll top button
  clickCopy.style.display = 'inline-block';
  scrollTop.style.display = 'block';

  // apply color to buttons (funsies)
  let fbUTMs = document.getElementsByClassName('fb-utm-btn');
  let fbUTMsArray = Array.from(fbUTMs);
  let btnColors = [];

  // generate colors
  for (i=0; i<fbUTMs.length; i++) {
    if(i === 0) {
      btnColors.push('rgb(188,51,57');
    } else {
      let redDelta = (-124 / fbUTMs.length);
      let greenDelta = (13 / fbUTMs.length);
      let blueDelta = (7 / fbUTMs.length);
      let newColor = `rgb(${Math.floor(188 + (redDelta*(i+1)))},${Math.floor(51 + (greenDelta*(i+1)))},${Math.floor(57 + (blueDelta*(i+1)))})`;
      btnColors.push(newColor);
    }
  }
  
  fbUTMsArray.forEach((item, i) => {
    item.style.backgroundColor = btnColors[i];

  });

  window.scroll(0, 10000);

}



// COPY ON CLICK

// output area
const currentUTM = document.getElementById('current-utm');

// listener on output
outputArea.addEventListener('click', (e) => {

  // event delegation
  if (e.target.classList.contains('utm-btn') || e.target.classList.contains('fb-utm-btn')) {
    
    // grab info for copying from button ID 
    let tarIDType = String(e.target.id).charAt(0);
    let tarIDNum = (Number((e.target.id).charAt(((e.target.id).length)-1))-1);
    
    // determine which UTM to grab from UTMStore[]
    switch (tarIDType) {
      case "f": // fb ads

        currentUTM.textContent = UTMStore[tarIDNum];
        break;

      case "H":

        let currentGroupH = UTMStore[tarIDNum];
        currentUTM.textContent = currentGroupH[0];
        break;
    
      case "F":

        let currentGroupF = UTMStore[tarIDNum];
        currentUTM.textContent = currentGroupF[1];
        break;

      case "I":
    
        let currentGroupI = UTMStore[tarIDNum];
        currentUTM.textContent = currentGroupI[2];
        break;
      
      case "B":
    
        let currentGroupB = UTMStore[tarIDNum];
        currentUTM.textContent = currentGroupB[3];
        break;
    

      case "C":
    
        let currentGroupC = UTMStore[tarIDNum];
        currentUTM.textContent = currentGroupC[4];
        break;
    
      case "S":
    
        let currentGroupS = UTMStore[tarIDNum];
        currentUTM.textContent = currentGroupS[5];
        break;
      
      default:
        break;
    }

    // copy UTM to clipboard
    currentUTM.focus({preventScroll:true});
    currentUTM.select();
    document.execCommand('copy');
    currentUTM.blur();

    window.scroll(0, 10000);

    // display confirmation
    clickCopy.textContent = "COPIED";
    setTimeout(() => {
      clickCopy.textContent = "CLICK TO COPY";
    }, 1000);

  } 
});



// CLEAR BUTTON

document.getElementById('clear-select').addEventListener('click', () => {

  document.location.reload();

});