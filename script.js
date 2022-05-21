let counterTitle = document.querySelector('#counterTitle');



function titleInterval(num,tag,finaltime) {

    let counter=num;

    let interval= setInterval(()=>{
        if(counter<finaltime){
            counter++
            tag.innerHTML=`${counter}`;
        }else{
            clearInterval(interval);
        }
    },150);
    
}

titleInterval(0,counterTitle,100)

// NAVBAR

let navDesk=document.querySelector('#navDesk')
let navMobile=document.querySelector('#navMobile')

document.addEventListener('scroll',()=>{
    if(window.scrollY>300){
        navDesk.classList.add('d-lg-none');
        navMobile.classList.add('d-none');
    } else{
        navDesk.classList.remove('d-lg-none');
        navMobile.classList.remove('d-none')
    }
})


// SWIPER

const swiper = new Swiper('.swiper', {


    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
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
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      },
  });