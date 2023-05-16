// menu bar toogle javascript
let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


let section=document.querySelector('section');
let navLinks=document.querySelector('header .navbar a');
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec=>{
        let top=window.scrollY;
        let height =sec.offsetHeight;
        let offset =sec.offsetTop-150;
        let id =sec.getAttribute('id');

        if(top=>offset && top< offset +height){

          navLinks.forEac (links=>{
            links.classList.remove('active');
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

          });
        }
    });
}


// Search bar toggle java script code 
let search=document.querySelector('#search-icon');
let form=document.querySelector('#search-form');
let close=document.querySelector('#close');
search.onclick=()=>{
    form.classList.toggle('active');
}

close.onclick=()=>{
    form.classList.remove('active');
}


// home slider 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

// slider 
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    640:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    },
  },
});


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');

}

function fadeOut(){
  setInterval(loader,3000);
}

window.onload = fadeOut;