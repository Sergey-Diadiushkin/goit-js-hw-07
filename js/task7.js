const spanRef = document.querySelector("#text");
const inputRef = document.querySelector("#font-size-control");

inputRef.addEventListener("input", (e) => {
  spanRef.style.fontSize = inputRef.value + "px";
});
