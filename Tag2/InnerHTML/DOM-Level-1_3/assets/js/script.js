


const gallery = document.getElementById("gallery");

const images = [
  { src: "./assets/img/anthony-ermitano.jpg", text: "Pic1" },
  { src: "./assets/img/bernhard.jpg", text: "Pic2" },
  { src: "./assets/img/steve-gribble.jpg", text: "Pic3" },
];

images.forEach((item) => {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  let caption = document.createElement("figcaption");

  img.src = item.src;
  img.alt = item.text;
  caption.innerText = item.text;

  figure.appendChild(img);
  figure.appendChild(caption);

  gallery.appendChild(figure);
});
