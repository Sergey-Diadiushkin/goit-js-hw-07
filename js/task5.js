const inputRef = document.querySelector("input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (e) => {
  const value = e.target.value;
  spanRef.textContent = value;

  if (!inputRef.value) {
    spanRef.textContent = "незнакомец";
    return;
  }
});
