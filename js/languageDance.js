let changeStyle = localStorage.getItem('dance');
let switches = document.querySelector('#switch');
switches.addEventListener('click', swapStyle);
let textIt =document.getElementById('text-dance')

// Load Page Style MONOLOGUE
function loadStyle() {
    changeStyle = localStorage.getItem('dance');
    if (changeStyle === 'true') {
       // dark.setAttribute('href', 'css/language.css');
        switches.textContent = 'English';
        textIt.textContent = 'Eidsbel proviene dalla ginnastica artistica e nei suoi inizi come ballerina contò con la meravigliosa guida di Maria Luisa Bigott, accademia dove, a parte la Jazz Dance, inizio il Flamenco ed anche il TipTap.  Da giovane età ha lavorato in diversi programmi della televisione nazionale del Venezuela,  con coreografi come Joaquin Riviera, Mery Cortés, Antonio Drija e Anita Vivas, in produzioni con artisti di fama internazionale, fino all’ultimo giorno, prima di lasciare il Venezuela; il suo ultimo spettacolo come ballerina, nella sua amata terra, è stato “La Ola Belmont” nella città di Maracaibo davanti a più di 15mila persone. In Italia, il suo primo contatto con la danza è stato nel 1994 con Il Maestro Mauro Astolfi in uno stage da lui offerto nella città di Verona e dopo a Roma nell’I.A.L.S. Nell’anno 2001, sempre a Verona, ingressa alla VIc Ballet Academy con Hans Camille Vancol, fino ad oggi. Ballerina di Tango Argentino, iniziò per passione nella città di Buenos Aires e frequenta ancora dei corsi di questo stupendo ballo. Insegnante di Balli Latinoamericani e di Flamenco (Corso 2023 - inizio a breve) Per info potete utilizzare la sezione Contatti della pagina.'
      //  siteContent.textContent=language.eng.welcome;
        
    } else {
        if (changeStyle === 'false') {
         //   dark.setAttribute('href', 'css/style.css');
            switches.textContent = 'Italian';
            textIt.textContent = 'Eidsbel comes from artistic gymnastics and in her beginnings as a dancer she counted with the wonderful guidance of Maria Luisa Bigott, an academy where, apart from Jazz Dance, she started Flamenco and Tiptop. From a young age she worked in various programs of the national television of Venezuela, with choreographers such as Joaquin Riviera, Mery Cortés, Antonio Drija and Anita Vivas, in productions with internationally renowned artists, until the last day, before leaving Venezuela; her last show as a dancer, in her beloved land, was "La Ola Belmont" in the city of Maracaibo in front of more than 15,000 people. In Italy, her first contact with dance was in 1994 with Maestro Mauro Astolfi in an internship he offered in the city of Verona and later in Rome in the I.A.L.S. In 2001, still in Verona, she entered the VIc Ballet Academy with Hans Camille Vancol, until today. Dancer of Tango Argentino, she started out for passion in the city of Buenos Aires and still attends courses in this wonderful dance. Latin American Dance and Flamenco Teacher (Course 2023 - starting soon) For info you can use the Contact section of the page.'
        } 
    };
};
document.addEventListener('DOMContentLoaded', loadStyle);

// Switch Styles according to Local Storage
function swapStyle() {
    changeStyle = localStorage.getItem('dance');
    if (changeStyle === 'true'){
        changeStyle = localStorage.setItem('dance', 'false');
    } else {
        changeStyle = localStorage.setItem('dance', 'true');
    }
    loadStyle();

};  