// script for index page
  
const slidesContainer = document.getElementById("slides-container");
const slideButton = document.querySelector(".logo_index");



const text = [
  "Aux échecs, l'amour propre est satisfaisant quand on remporte la victoire,</br> mais il n'y a pas de honte à être battu.</br>(Benjamin Franklin)",
  "Il vaut mieux avoir un plan incorrect que de ne pas avoir de plan du tout.</br> (Victor Kortchnoï)",
  "On n'a jamais gagné une partie en abandonnant.</br>(Savielly Tartacover)",
  "Les sacrifices démontrent seulement que quelqu'un a gaffé.</br>(Savielly Tartacover)",
  "La menace est plus forte que son exécution.</br>(Aaron Nimzovitch)",
  "Celui qui prend des risques peut perdre, celui qui n'en prend pas perd toujours.</br>(Xavier Tartacover)",
  "On peut tirer plus d'utilité d'une partie perdue que de cent parties gagnées.</br>(José Raúl Capablanca)",
  "Le génie consiste à savoir transgresser les règles au moment opportun.</br>(Richard Teichmann)",
  "Il n'y a pas de sport plus violent que les échecs.</br>(Garry Kasparov)",
  "Pour moi, les échecs ne sont pas un jeu mais un art.</br>(Alexandre Alekhine)",
  "<strong>Pourquoi dit-on échec et mat ?</strong></br>Interjection d'un des deux joueurs,</br>avertissant que le roi de l'adversaire est menacé.</br>Elle est empruntée, de l'arabe au persan'as-sah mat' signifiant 'le roi est mort' ou 'le roi est vaincu'."
];
const slide = (array) => {
  let i = Math.floor(Math.random() * array.length);
    slidesContainer.innerHTML = `<p> ${array[i]} </p>`;
 }
setInterval(() => {slide(text)}, 5000);

slideButton.addEventListener("click",function() {slide(text)});



