
// NAVBAR

let navDesk=document.querySelector('#navDesk')
let navMobile=document.querySelector('#navMobile')
let logIn=document.querySelector('#logIn')
let navSign=document.querySelector('#navSign');

navSign.addEventListener('click', ()=>{
  // logIn.classList.remove('contLogIn');
  logIn.classList.add('contLogIn-active');
})


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

// SEARCHBAR E SETINTERVAL HEADER


fetch('./MOCK_DATA.json')
.then(response =>{
  return response.json()
})
.then(products => {
  //SET INTERVAL HEADER
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
    },10);
    
  }
  
  titleInterval(0,counterTitle,`${products.length}`)
  
  // POPOLAZIONE DROPDOWN CATEGORIE
  let catSrc=document.querySelector('#catSrc')
  let categories = Array.from(new Set(products.map(el=>{
    return el.category
  })))
  categories.forEach((el,i) =>{
    let option=document.createElement('option')
    option.setAttribute('value',`${el}`)
    option.innerHTML=`${el}`
    catSrc.appendChild(option)
  })
  // POPOLAZIONE DROPDOWN LUOGO
  let placeSrc=document.querySelector('#placeSrc')
  let places = Array.from(new Set(products.map(el=>{
    return el.position
  })))
  places.forEach((el,i) =>{
    let option=document.createElement('option')
    option.setAttribute('value',`${el}`)
    option.innerHTML=`${el}`
    placeSrc.appendChild(option)
  })
  // ULTIMI 6 ANNUNCI NEL CAROSELLO
  let swiperWrap=document.querySelector('#swiperWrap');
  
  let currentYear = new Date().getFullYear().toString()
  
  let sorted = products.filter(el=> el.date.includes(currentYear)).sort((a,b)=>{
    var aa = a.date.split('/').reverse().join(),
    bb = b.date.split('/').reverse().join();
    return bb < aa ? -1 : (bb > aa ? 1 : 0);
  });
  
  function slider(){for(let i=0;i<6;i++){
    let div=document.createElement('div');
    div.classList.add('swiper-slide','py-5');
    div.innerHTML =`
    
    <div class="cardProd">
      <img src="./mediaProdotti/car.png" alt="" class="img-fluid mx-0">
      <h6 class="mt-2 ms-2">${sorted[i].product}</h6>
      <p class="mt-2 ms-2 fs-6 d-block mb-0">
      <i class="fa-solid fa-boxes-stacked"></i>
      ${sorted[i].category}
      </p>
      <small class="mt-2 ms-2 d-block">
      <i class="fa-solid fa-location-dot"></i>
      ${sorted[i].position}
      </small>
      <small class="mt-2 ms-2 d-block">
      ${sorted[i].date}
      </small>
      <small class=${sorted[i].stat=="vendo"? 'tagVendo' : 'tagCerco'}>${sorted[i].stat=="vendo"? 'VENDO' : 'CERCO'}</small>
      <small class=${sorted[i].premium=="PREMIUM"?'tagPremium':''}>${sorted[i].premium=="PREMIUM"? 'PREMIUM' : ''}</small>
      <small class="mt-2 ms-auto me-2 pb-3 text-end d-block fw-bold fs-4 c-green-2">
      ${sorted[i].price}
      </small>
    </div>
    `;
    
    swiperWrap.appendChild(div)
    
  }};

  slider()
  
})