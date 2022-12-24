let changeStyle = localStorage.getItem('monologue');
let switches = document.querySelector('#switch');
switches.addEventListener('click', swapStyle);
let textIt =document.getElementById('text-it')

// Load Page Style
function loadStyle() {
    changeStyle = localStorage.getItem('monologue');
    if (changeStyle === 'true') {
       // dark.setAttribute('href', 'css/language.css');
        switches.textContent = 'English';
        textIt.textContent = 'TEXTO EN ITALIANO Lorem ipsum dolor sit amet, Quisque ornare mauris id vulputate malesuada. Sed at pretium orci. Donec eu metus vitae lorem interdum efficitur id vitae justo. Donec vel mattis mi, vel sodales mi. In vitae justo ex. Phasellus sed est eu nibh elementum vehicula.ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue non massa in euismod. Integer eget quam ut elit malesuada placerat. Quisque ornare mauris id vulputate malesuada. Sed at pretium orci. Donec eu metus vitae lorem interdum efficitur id vitae justo. Donec vel mattis mi, vel sodales mi. In vitae justo ex. Phasellus sed est eu nibh elementum vehicula.ipsum dolor sit amet, consectetur adipiscing elit.'
      //  siteContent.textContent=language.eng.welcome;
        
    } else {
        if (changeStyle === 'false') {
         //   dark.setAttribute('href', 'css/style.css');
            switches.textContent = 'Italian';
            textIt.textContent = 'TEXTO EN ENGLISHH Lorem ipsum dolor sit amet, Quisque ornare mauris id vulputate malesuada. Sed at pretium orci. Donec eu metus vitae lorem interdum efficitur id vitae justo. Donec vel mattis mi, vel sodales mi. In vitae justo ex. Phasellus sed est eu nibh elementum vehicula.ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue non massa in euismod. Integer eget quam ut elit malesuada placerat. Quisque ornare mauris id vulputate malesuada. Sed at pretium orci. Donec eu metus vitae lorem interdum efficitur id vitae justo. Donec vel mattis mi, vel sodales mi. In vitae justo ex. Phasellus sed est eu nibh elementum vehicula.ipsum dolor sit amet, consectetur adipiscing elit.'
        } 
    };
};
document.addEventListener('DOMContentLoaded', loadStyle);

// Switch Styles according to Local Storage
function swapStyle() {
    changeStyle = localStorage.getItem('monologue');
    if (changeStyle === 'true'){
        changeStyle = localStorage.setItem('monologue', 'false');
    } else {
        changeStyle = localStorage.setItem('monologue', 'true');
    }
    loadStyle();

};  