let changeStyle = localStorage.getItem('music');
let switches = document.querySelector('#switch');
switches.addEventListener('click', swapStyle);
let textIt =document.getElementById('text-music')

// Load Page Style MONOLOGUE
function loadStyle() {
    changeStyle = localStorage.getItem('music');
    if (changeStyle === 'true') {
       // dark.setAttribute('href', 'css/language.css');
        switches.textContent = 'English';
        textIt.textContent = 'Eidsbel ha percorso un lungo cammino nel canto, passando dai musical attraverso le orchestre da 17 elementi e diversi gruppi musicali.  Attualmente in Italia si presenta come cantante solista e come DJ. Il suo repertorio è molto ampio e per questo è in grado di intrattenere il pubblico con le sue esecuzioni, sia in una festa che sul palco. Ha tutta l’attrezzatura necessaria per l’amplificazione del suono per l’illuminazione di eventi di mezza entità. Suona il piano e la chitarra per piacere, lei preferisce lasciare questo compito ai colleghi musicisti e dedicarsi al canto. Insegnate di Canto Moderno presso l’Ente Filarmonico di Desenzano del Garda (Bs). Da quest’anno offre anche lezioni private. Ha studiato in diverse accademie di musica ed attualmente esegue un Master Universitario in vocalità artistica, foniatria e canto. Collabora da anni con la Sound Management Corporation sia come artista sia come compositore. Se volete avere info sui servizi come cantante o DJ potete utilizzare la  sezione Contatti della pagina.'
      //  siteContent.textContent=language.eng.welcome;
        
    } else {
        if (changeStyle === 'false') {
         //   dark.setAttribute('href', 'css/style.css');
            switches.textContent = 'Italian';
            textIt.textContent = 'Eidsbel has come a long way singing, going from musicals, through 17-piece orchestras and various musical ensembles. Currently in Italy she presents himself as a solo singer and as a DJ. Her repertoire is very wide and for this reason she can entertain the audience with her performances, both, in a party and on stage. She has all the necessary sound reinforcement equipment and lighting of medium-sized events. She plays piano and guitar for pleasure, she prefers to leave this task to fellow musicians and devote herself to singing. Teacher of Modern Singing at the Philharmonic Institute of Desenzano del Garda (Bs). From this year she also offers private lessons. She studied in various music academies and currently carries out a University Master&#39;s degree in artistic vocality, phoniatry and singing. She has been collaborating for years with the Sound Management Corporation both as an artist and as a composer. If you want to have her services as a singer or DJ, go to the Contact section of the page.'
        } 
    };
};
document.addEventListener('DOMContentLoaded', loadStyle);

// Switch Styles according to Local Storage
function swapStyle() {
    changeStyle = localStorage.getItem('music');
    if (changeStyle === 'true'){
        changeStyle = localStorage.setItem('music', 'false');
    } else {
        changeStyle = localStorage.setItem('music', 'true');
    }
    loadStyle();

};  