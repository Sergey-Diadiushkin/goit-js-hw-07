const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGalleryRef = document.querySelector("#gallery");

const createGallery = images.map(
  (image) =>
    `<li><img src='${image.url}' alt='${image.alt}' class='img' /></li>`
);
ulGalleryRef.insertAdjacentHTML("beforeend", createGallery);

// const imagesRef = images.forEach((image) => {
//   const liRef = document.createElement("li");
//   const tagImg = document.createElement("img");
//   tagImg.textContent = image.kays;
//   liRef.appendChild(tagImg);
//   gallery.appendChild(liRef);
// });;
qs;
