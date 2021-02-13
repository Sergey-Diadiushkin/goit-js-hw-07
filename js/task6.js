const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", validateInput);

function validateInput() {
  if (event.target.value.length === 6) {
    inputRef.classList.add("valid"), inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid"), inputRef.classList.remove("valid");
  }
}
