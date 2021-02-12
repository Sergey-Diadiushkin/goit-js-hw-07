const spanRef = document.querySelector("span");
const inputRef = document.querySelector("input");

inputRef.addEventListener("input", (e) => {
  spanRef.style.fontSize = inputRef.value + "px";
});
