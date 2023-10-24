let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navlist");


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}



  const name = document.querySelector(".btn2");
  name.innerHTML = localStorage.getItem("data");


  const slider = () =>{
    const arrows = document.querySelectorAll(".slider .arr");
    const cards = document.querySelector(".slider .container");

    arrows.forEach(btn => {
      btn.addEventListener('click' , ()=>{
        console.log(btn);
        const direct = btn.id === "back" ? -0.5 : 0.5;
        const scroll =  cards.clientWidth * direct;
        cards.scrollBy({left : scroll , behavior : "smooth"})
      });
    });
  }

  window.addEventListener('load' , slider);
