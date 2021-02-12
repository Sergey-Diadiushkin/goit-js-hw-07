const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulIngredientsRef = document.querySelector("#ingredients");

const liRefs = ingredients.forEach((ingr) => {
  const ingredientsRef = document.createElement("li");
  ingredientsRef.textContent = ingr;
  ulIngredientsRef.appendChild(ingredientsRef);
});
