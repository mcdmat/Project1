// script for index page
  
const slidesContainer = document.getElementById("slides-container");
const slideButton = document.querySelector(".logo_index");



const text = [
  "Aux échecs, l'amour propre est satisfaisant quand on remporte la victoire,</br> mais il n'y a pas de honte à être battu.</br>(Benjamin Franklin)",
  "Il vaut mieux avoir un plan incorrect que de ne pas avoir de plan du tout.</br> (Victor Kortchnoï)",
  "On n'a jamais gagné une partie en abandonnant.</br>(Savielly Tartacover)",
  "Les sacrifices démontrent seulement que quelqu'un a gaffé.</br>(Savielly Tartacover)",
  "La menace est plus forte que son exécution.</br>(Aaron Nimzovitch)",
];
slideButton.addEventListener("click", () => {
const slide = (array) => {
  let i = Math.floor(Math.random() * array.length);
    slidesContainer.innerHTML = `<p> ${array[i]} </p>`;
 }
 slide(text);
  });

