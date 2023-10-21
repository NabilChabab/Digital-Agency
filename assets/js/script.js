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


  const popup = document.querySelector(".popup");
  const close = document.querySelector(".remove");
  window.onload = function(){
    setTimeout(function(){
    popup.classList.add("transis");
    },2000);
  }

  close.addEventListener('click' , ()=>{
    popup.classList.add("trnsis_remove");
  });

