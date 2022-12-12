// script for index page
  
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});




// script for press page

// const modal = document.querySelector("#myModal");
// let press = document.querySelectorAll(".pressImg");
// const bigPress = document.querySelector(".modal-content img");

// press = [...press];

// for (let i = 0; i < press.length; i++) {
//   press[i].addEventListener("click", () => {
//     let imgSrc = press[i].src.split("/").pop();
//     bigPress.src = `./press/maxi_${imgSrc}`;
//     modal.style.display = "block";
//   });
// }

// modal.addEventListener("click", () => {
//   modal.style.display = "none";
// });
