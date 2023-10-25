//Dark Theme
var icon = document.getElementById("moon");
icon.onclick = function(){
  console.log(icon);
  document.body.classList.toggle("dark-theme");
}

//menu
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navlist");


menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}


//GetData
const name = document.querySelector(".btn2");
name.innerHTML = localStorage.getItem("data");

//Slider
const slider = () => {
  const arrows = document.querySelectorAll(".slider .arr");
  const cards = document.querySelector(".slider .container");

  arrows.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(btn);
      const direct = btn.id === "back" ? -0.25 : 0.25;
      const scroll = cards.clientWidth * direct;
      cards.scrollBy({ left: scroll, behavior: "smooth" })
    });
  });
}

window.addEventListener('load', slider);
