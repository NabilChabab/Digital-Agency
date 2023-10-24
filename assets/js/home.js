let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navlist");


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView : 2,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },

    
  });


  const name = document.querySelector(".btn2");
  name.innerHTML = localStorage.getItem("data");
