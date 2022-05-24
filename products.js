
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
  let srcBtn= document.querySelector('.srcBtn');
  let select = document.querySelector('#select');
  // let productElement=document.querySelector('.product-element');


  // FUNZIONI LANCIATE
  
  popolaDropCat();
  popolaDropPlace();
  
  srcBtn.addEventListener('click',filter);
  select.addEventListener('input',sortProducts);
  console.log(products);
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
        div.classList.add('col-12','col-lg-4','product-element');
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
            <small class=${el.premium=="1"?'tagPrem':''}>${el.premium=="1"? 'PREMIUM' : ''}</small>
            <small class="mt-2 ms-auto me-2 pb-3 text-end d-block fw-bold fs-4 c-green-2">
            ${el.price}
            </small>
          </div>
        `
        secProd.appendChild(div);
    })
    
  }
  

  function filter() {
    let selectedCategory=catSrc.value;
    let selectedPlace= placeSrc.value;
    let searchedProduct= inputSrc.value.toLowerCase();    
    let filteredProduct = products.filter(product=> { return product.product.toLowerCase().includes(searchedProduct)}).filter(product=> {
      return product.category === selectedCategory || selectedCategory=='all';
    }).filter(product=> {
      return product.position === selectedPlace || selectedPlace=='all';
    })
    
    
    let filteredIDs=filteredProduct.map(product =>{
      return product.id;
    })
    
    
    showHideFilter(filteredIDs)
  }


  function showHideFilter(filteredIDs) {
  let productElement=document.querySelectorAll('.product-element');

    productElement.forEach(el=>{
      let productId= Number(el.getAttribute('product-id'));
      if(filteredIDs.includes(productId) ){
        el.classList.remove('d-none')
      }else {
        el.classList.add('d-none')
      }
    })
    
  }
  
  function sortProducts() {
    let order = select.value;
    console.log(products);
    switch (order) {
      case "cheaper":
        products.sort((a,b)=> 
        Number(a.price.substring(1))-Number(b.price.substring(1)));
        
        break;
        case "expensive":
          products.sort((a,b)=> 
          Number(b.price.substring(1))-Number(a.price.substring(1)));
          
          break;
        default:
        break;
        }  
      }
      orderDom();
      
      
      function orderDom() {
        
        let productElement=document.querySelectorAll('.product-element');

        
        productElement.forEach(el=> {
          let productId= Number(el.getAttribute('product-id'));
          
          let orderIndex = products.findIndex(product=> product.id == productId);
          console.log(orderIndex);
          
          el.style.order = orderIndex;
          
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
  
