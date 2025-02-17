const form = document.querySelector("form");
const card = document.querySelector(".cardcontainer");
const tycard = document.querySelector(".tycard");
const subbtn = document.querySelector(".subbtn");
const inputField = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputField.value !== "") {
    card.classList.add("hide");
    tycard.classList.remove("hide");
  }
});

subbtn.addEventListener("click", (e) => {
  e.preventDefault();
  card.classList.remove("hide");
  tycard.classList.add("hide");
});
