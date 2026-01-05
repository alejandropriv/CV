(async function() {
  // Extract language from URL path
  // Handles: /, /en, /en/, /de, /de/, /es, /es/
  const pathParts = location.pathname.split('/').filter(part => part.length > 0);
  const lang = pathParts[0] || 'en';
  
  // Load the appropriate language based on URL
  switch(lang) {
    case 'de':
      await loadLanguageDE();
      break;
    case 'es':
      await loadLanguageES();
      break;
    case 'en':
    default:
      await loadLanguageEN();
      break;
  }
  
  loadData();
})();

var data = ""

async function loadLanguageEN(){
  console.log("Loading English language data...");
  try {
    const response = await fetch('/en/language.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed, check logs, Error loading English language data from JSON:', error);
  }
}

async function loadLanguageDE(){
  console.log("Loading German language data...");
  try {
    const response = await fetch('/de/language.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed, check logs, Error loading German language data from JSON:', error);
  }
}

async function loadLanguageES(){
  console.log("Loading Spanish language data...");
  try {
    const response = await fetch('/es/language.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed, check logs, Error loading Spanish language data from JSON:', error);
  }
}

function concatWEDescription(descriptions) {
  if (!Array.isArray(descriptions)) return "";

  return descriptions
    .filter(item => item.enabled)
    .map(item => {
      if (item.title) {
        return `<div class='company-description-bold'>${item.title}:</div> ${item.text}<br>`;
      }
      return `${item.text}<br>`;
    })
    .join("");
}

function loadData(){

  document.querySelector("#skills").innerText = data.SK100.title

  Object.keys(data.SK100.training).forEach(element => {

    if(data.SK100.training[element].enable){

      li = setli("SK100-UL", element)
      li.classList.add("skill-stars");
      var stars = createStars(data.SK100.training[element].value);
      li.appendChild(stars);
    }


  });

  document.querySelector("#training").innerText = data.CT100.title

  var ul = document.getElementById("CT100-UL");
  var li = document.createElement("li");

  Object.keys(data.CT100.certifications).forEach(element => {

    let img = document.createElement('img');
    img.src = data.CT100.certifications[element];
    img.height = 60
    img.style.margin = "10px 0px 10px 10px"
    li.appendChild(img);
  });

  ul.appendChild(li);


  Object.keys(data.CT100.certifications).forEach(element => {
    li = setli("CT100-UL", element)
  });

  Object.keys(data.CC100.certifications).forEach(element => {
    li = setli("CT100-UL", element)
  });


  document.querySelector("#SKL100").innerText = data.SKL100.title
  Object.keys(data.SKL100.languages).forEach(element => {
    li = setli("SKL100-UL", element)
    li.classList.add("skill-stars");
    var stars = createStars(data.SKL100.languages[element]);
    li.appendChild(stars);
  });

  document.querySelector("#contactPresentation > p > span").innerText = data.contactPresentation
  document.querySelector("#WETitleGeneral").innerText = data.WETitleGeneral

  data.WE.forEach(element => {

    if(element.WEEnable == true){
      if(element.WETitle == "divider"){
        addHTML( document.querySelector("#experience"),

          '<div class="'+element.WETitle+' page-break" style="height: '+element.WEHeight+'px"></div>'
        )
        
      } else{
        addHTML( document.querySelector("#experience"),
          '<div id="xxx" class="job-wrapper clearfix page-break-inside">\
            <div class="company-wrapper clearfix">\
            <div id="WETitle" class="experience-title">'+element.WETitle+'</div>\
            <div id="WETime" class="time dateformat">'+element.WETime+'</div>\
          </div>\
          <div class="job-wrapper clearfix">\
            <div id="WEDescription" class="company-description">'+ concatWEDescription(element.WEDescription) +'</div>\
          </div>\
        </div>\
        ')
      }
    }

  });

  if(data.CTitleGeneral.CTEnable == "true"){
    document.querySelector("#CTitleGeneral").innerText = data.CTitleGeneral.CTitle
  }else{
    document.querySelector("#CTitleGeneral")?.remove()
  }

  data.C.forEach(element => {

    if(element.CEnable == "true"){
    
      if(element.CTitle == "divider"){
        addHTML( document.querySelector("#experience"),
          '<div class="'+element.CTitle+'" style="height: '+element.CHeight+'"></div>'
        )
        
      } else{
        addHTML( document.querySelector("#contracts"),
          '<div id="yyy" class="job-wrapper clearfix">\
            <div class="company-wrapper clearfix">\
              <div id="CTitle" class="experience-title">'+element.CTitle+'</div>\
              <div id="CTime" class="time dateformat">'+element.CTime+'</div>\
            </div>\
            <div class="job-wrapper clearfix">\
              <div id="CSubtitle" class="company-description">'+element.CSubtitle+'</div>\
              <div id="CDescription" class="company-description">'+ concatWEDescription(element.CDescription) +'</div>\
            </div>\
          </div>')
      }
    }
  });


  document.querySelector("#STitleGeneral").innerText = data.STitleGeneral

  data.S.forEach(element => {

    if(element.SEnable == true){
      if(element.WETitle == "divider"){
        addHTML( document.querySelector("#experience"),
          '<div class="'+element.STitle+'" style="height: '+element.SHeight+'"></div>'
        )
      } else{
        html_description = concatWEDescription(element.WEDescription);
        addHTML( document.querySelector("#studies"),
          '<div id="ssss" class="job-wrapper clearfix">\
          <div class="company-wrapper clearfix">\
            <div id="STitle" class="experience-title">'+element.STitle+' </div>\
            <div id="STime" class="time dateformat">'+element.STime+'</div>\
          </div>\
          <div class="job-wrapper clearfix">\
            <div id="SSubtitle" class="sub-title">'+element.SSubtitle+'</div>\
            <div id="SDescription" class="company-description">'+ concatWEDescription(element.SDescription) +'</div>\
          </div>\
          </div>');
      }
    }
  });
}

function setDividers(data){
  // data.Divider.forEach(div => {

  //   document.getElementById(div);
  // })
}
function toHtml(content) {
  return Array.isArray(content) ? content.join('') : String(content || '');
}
function createStars(numStars) {
  
  var starsContainer = document.createElement("span");
  starsContainer.classList.add("stars");
  
  for (var i = 0; i < 5; i++) {
    var star = document.createElement("span");
    star.classList.add("star");
    if (i < numStars) {
      star.textContent = "★";
    } else {
      star.classList.add("empty");
      //star.textContent = "☆";
    }
    starsContainer.appendChild(star);
  }
  
  return starsContainer;
}
function setli(ulname, element) {
  var ul = document.getElementById(ulname);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(element));
  li.setAttribute("id", setID(element)); 
  ul.appendChild(li);

  return li
}
function setID(id){
  id=id.split(' ').filter(e => e.trim().length).join('_')
  return id
}
function addCss(cssCode) {
  var styleElement = document.createElement("style");
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = cssCode;
  } else {
    styleElement.appendChild(document.createTextNode(cssCode));
  }
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}
function addHTML(rootElement, htmlCode){

  rootElement.innerHTML += htmlCode

}
