const form = document.querySelector("form");
const card = document.querySelector(".cardcontainer");
const tycard = document.querySelector(".tycard");
const subbtn = document.querySelector(".subbtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  card.classList.add("hide");
  tycard.classList.remove("hide");
});

subbtn.addEventListener("click", (e) => {
  e.preventDefault();
  card.classList.remove("hide");
  tycard.classList.add("hide");
});
