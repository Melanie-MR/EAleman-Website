let changeStyle = localStorage.getItem('monologue');
let switches = document.querySelector('#switch');
switches.addEventListener('click', swapStyle);
let textIt =document.getElementById('text-it')

// Load Page Style MONOLOGUE
function loadStyle() {
    changeStyle = localStorage.getItem('monologue');
    if (changeStyle === 'true') {
       // dark.setAttribute('href', 'css/language.css');
        switches.textContent = 'English';
        textIt.textContent = 'Estroprogestedonna nasce come un monologo teatrale nell’anno 2007 per diventare attraverso gli anni uno spettacolo teatrale completo a due tempi. In questo spettacolo Eidsbel parla alle donne e consiste nel richiamo alla solidarietà e buona autostima delle donne, per evitare la normalizzazione dell’abuso, la violenza ed il femminicidio. Il personaggio è una donna che vive la crisi dei suoi 40 anni e racconta il visone che lei ha del significato di essere donna e della grande responsabilità che esso comporta nei confronti di se stesse e delle altre donne. Eidsbel si serve di canzoni e di balletti per arricchire e rappresentare in modo ironico alcune delle situazioni che molto spesso vivono le donne. In questo spettacolo potrete vedere Eidsbel in tutta la sua ampiezza artistica. Presentato per ultima volta nell’anno 2019 al Teatro Santissima Trinità di Verona, sarà presto in scena. Per info potete utilizzare la sezione Contatti della pagina.'
      //  siteContent.textContent=language.eng.welcome;
        
    } else {
        if (changeStyle === 'false') {
         //   dark.setAttribute('href', 'css/style.css');
            switches.textContent = 'Italian';
            textIt.textContent = 'Estroprogestedonna was born as a theatrical monologue in 2007 to become a complete two-stage theatrical show over the years. In this show Eidsbel speaks to women and consists in calling for women&#39;s togetherness and good self-esteem, to avoid the normalization of abuse, violence and feminicide. The character is a woman who is experiencing the crisis of her 40s and tells the vision she has of the meaning of being a woman and of the great responsibility that it entails towards herself and other women. Eidsbel uses songs and ballets to enrich and ironically represent some of the situations that women often experience. In this show you will be able to see Eidsbel in all its artistic breadth. Presented for the last time in 2019 at the Teatro Santissima Trinità in Verona, it will soon be on stage. For info you can use the Contact section of the page.'
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