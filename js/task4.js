const conterValue = document.querySelector("#value");
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');

decrementBtnRef.addEventListener("click", addDecrement);
incrementRef.addEventListener("click", addIncrement);

function addIncrement() {
  conterValue.textContent++;
}
function addDecrement() {
  conterValue.textContent--;
}
