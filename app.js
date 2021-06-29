// Movement animation to happen
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// moving animation event
container.addEventListener("mouseover", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)";
  purchase.style.transform = "translateZ(124px)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(75px)";
});

// animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all 0.5s ease";
  title.style.transform = "translateZ(0)";
  sneaker.style.transform = "translateZ(0) rotateZ(0)";
  purchase.style.transform = "translateZ(0)";
  description.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
});
