let changeStyle = localStorage.getItem('index');
let switches = document.querySelector('#switch');
switches.addEventListener('click', swapStyle);
let textIt =document.getElementById('text-it')

// Load Page Style MONOLOGUE
function loadStyle() {
    changeStyle = localStorage.getItem('index');
    if (changeStyle === 'true') {
       // dark.setAttribute('href', 'css/language.css');
        switches.textContent = 'English';
        textIt.textContent = 'Eidsbel è originaria dal Venezuela, calda terra caraibica e tropicale, culla di diverse culture, dove ha ottenuto la Laurea Universitaria in Infermieristica, fattori questi che hanno influenzato tutto lo sviluppo della sua personalità artistica: eclettica ed in costante ricerca delle radici e anche dell’avanguardia di ogni varietà culturale. Come cantante, ballerina ed attrice ha partecipato nel musical “Once on this Island” prodotto a Broadway per la Playwrights Horizons Inc. e messo in scena in Venezuela come “Una vez en esta Isla” sotto la stretta supervisione della casa produttrice. Ha lavorato per decenni in diverse trasmissioni televisive in Venezuela (R.C.T.V., Venevision e VTV). Dal 2002 si è stabilita in Italia, dove si presenta come cantante solista con un ampio repertorio di musica internazionale, includendo i ritmi caraibici; collabora con vari locali e Wedding Planners del Nord Italia. Inoltre, da diversi anni insegna canto moderno all’Ente Filarmonico di Desenzano del Garda e, come ballerina, insegna Flamenco e danze latinoamericane. Per quanto si riferisce alla recitazione, ha scritto e messo in scena il suo monologo ESTROPROGESTEDONNA che dal 2007 ha presentato in teatro. Dall’anno 2011 Eidsbel fa parte degli autori e degli artisti della SOUND MANAGEMENT CORPORATION, partecipando nella produzione di diversi brani di musica chill out, dance e house in collaborazione con vari DJ ed creando le melodie vocali, apportando la sua voce e scrivendo i testi. Iscritta dal 2007 alla Società Italiana Autori e Compositori (S.I.A.E.) sia nella sezione Musica che nella Sezione DOR(Opere Drammatiche e Radiotelevisive). Eidsbel Aleman è un artista a 360°'
      //  siteContent.textContent=language.eng.welcome;
        
    } else {
        if (changeStyle === 'false') {
         //   dark.setAttribute('href', 'css/style.css');
            switches.textContent = 'Italian';
            textIt.textContent = 'Eidsbel is originally from Venezuela, a warm Caribbean and tropical land, cradle of different cultures, where she obtained a University Degree in Nursing, factors which have influenced the entire development of her artistic personality: eclectic and in constant search of roots and of avant-garde of every cultural variety. As a singer, dancer, and actress, she participated in the musical "Once on this Island" produced on Broadway for Playwrights Horizons Inc. and staged in Venezuela as "Una vez en esta Isla" under the strict supervision of the producer. He has worked for decades in different television broadcasts in Venezuela (R.C.T.V., Venevision and VTV). Since 2002 she has settled in Italy, where she presents herself as a single singer with a wide repertoire of international music, including Caribbean rhythms; collaborates with various venues and Wedding Planners in Northern Italy. Furthermore, for several years till today, she has been teaching modern singing at the Ente Filarmonico of Desenzano del Garda and, as a dancer, she teaches Flamenco and Latin American dances. Concerning acting, she wrote and staged her monologue ESTROPROGESTEDONNA which she has presented in the theater since 2007. From the year 2011 Eidsbel is part of the authors and artists of the SOUND MANAGEMENT CORPORATION, participating in the production of various pieces of chill out, dance and house music, in collaboration with various DJs creating the vocal melodies, contributing her voice and writing the lyrics. Member of the Italian Society of Authors and Composers (S.I.A.E.) since 2007 both in the Music section and in the DOR Section (Drama and Radio and Television Works). Eidsbel Aleman is an artist at 360°'
        } 
    };
};
document.addEventListener('DOMContentLoaded', loadStyle);

// Switch Styles according to Local Storage
function swapStyle() {
    changeStyle = localStorage.getItem('index');
    if (changeStyle === 'true'){
        changeStyle = localStorage.setItem('index', 'false');
    } else {
        changeStyle = localStorage.setItem('index', 'true');
    }
    loadStyle();

};  