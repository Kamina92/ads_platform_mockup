
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



// SEARCHBAR E SETINTERVAL HEADER




fetch('./MOCK_DATA.json')
.then(response =>{
  return response.json()
})
.then(products => {
  // ELEMENTI DOM
  let catSrc=document.querySelector('#catSrc')
  let option=document.createElement('option')
  let placeSrc=document.querySelector('#placeSrc')
  let secProd =document.querySelector('#secProd');
  let inputSrc= document.querySelector('#inputSrc');
  
  // FUNZIONI LANCIATE
  
  popolaDropCat();
  popolaDropPlace();
  populateProd();

  
  
  // POPOLAZIONE DROPDOWN CATEGORIE

  function popolaDropCat() {
    let categories = Array.from(new Set(products.map(el=>{
      return el.category
    })))

    categories.forEach((el,i) =>{
      let option=document.createElement('option')
      option.setAttribute('value',`${el}`)
      option.innerHTML=`${el}`
      catSrc.appendChild(option)
    })
  }
  // POPOLAZIONE DROPDOWN LUOGO

  function popolaDropPlace() {
    let places = Array.from(new Set(products.map(el=>{
      return el.position
    })))
    places.forEach((el,i) =>{
      let option=document.createElement('option')
      option.setAttribute('value',`${el}`)
      option.innerHTML=`${el}`
      placeSrc.appendChild(option)
    })
    
  }

  // CREAZIONE CARD PORDOTTI

  function populateProd() {
    products.forEach(el=>{
      let div = document.createElement('div');
        div.classList.add('col-12','col-lg-4');
        div.setAttribute('product-id',el.id);
        div.innerHTML=`
        <div class="cardProduct my-5">
            <img src="./mediaProdotti/car.png" alt=""class="img-fluid mx-0">
            <h6 class="mt-2 ms-2">${el.product}</h6>
            <p class="mt-2 ms-2 fs-6 d-block mb-0">
            <i class="fa-solid fa-boxes-stacked"></i>
            ${el.category}
            </p>
            <small class="mt-2 ms-2 d-block">
            <i class="fa-solid fa-location-dot"></i>
            ${el.position}
            </small>
            <small class="mt-2 ms-2 d-block">
            ${el.date}
            </small>
            <small class=${el.stat=="vendo"? 'tagSell' : 'tagSearch'}>${el.stat=="vendo"? 'VENDO' : 'CERCO'}</small>
            <small class=${el.premium=="PREMIUM"?'tagPrem':''}>${el.premium=="PREMIUM"? 'PREMIUM' : ''}</small>
            <small class="mt-2 ms-auto me-2 pb-3 text-end d-block fw-bold fs-4 c-green-2">
            ${el.price}
            </small>
          </div>
        `
        secProd.appendChild(div);
    })
    
  }
 

    
  })


    
  





  


  // function createPagination() {
    
  //     let pageWrap=document.querySelector('#pageWrap')
    
  //     let pageSize=30;
    
  //     let pageNumb= Math.floor(products.length/pageSize)
  //   console.log(pageWrap);
  //   for(let i=1; i<=pageNumb;i++){
  //     let li = document.createElement('li');
  //     li.classList.add('page-item')
  //     li.innerHTML=`
  //     <a class="page-link" href="#">${i}</a>
  //     `
  //     pageWrap.appendChild(li);
  //   }
  //   let li = document.createElement('li');
  //   li.classList.add('page-item')
  //   li.innerHTML=`
  //     <a class="page-link" href="#" aria-label="Next">
  //     <span aria-hidden="true">&raquo;</span>
  //     </a>
  //   `;
  //   pageWrap.appendChild(li);

    
  // }

  // createPagination();
  
