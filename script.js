const form = document.querySelector("form");
const card = document.querySelector(".cardcontainer");
const tycard = document.querySelector(".tycard");
const subbtn = document.querySelector(".subbtn");
const inputField = document.querySelector("input");

if (inputField.value !== "") {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    card.classList.add("hide");
    tycard.classList.remove("hide");
  });
}
console.log(inputField.value);

subbtn.addEventListener("click", (e) => {
  e.preventDefault();
  card.classList.remove("hide");
  tycard.classList.add("hide");
});
