<<<<<<< HEAD
let navMobileCont = document.querySelector('.navMobileCont');

console.log(window);


// ## function declaration
function scrollEventThrottle(fn) {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener("scroll", function () {
      let previous_known_scroll_position = last_known_scroll_position;
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          fn(last_known_scroll_position, previous_known_scroll_position);
          ticking = false;
        });
        ticking = true;
      }
    });
  }
  
  // ## function invocation
  scrollEventThrottle((scrollPos, previousScrollPos) => {
      if (previousScrollPos > scrollPos) {
          navMobileCont.classList.add('navMobileCont')
        } else {
          navMobileCont.classList.remove('navMobileCont')
      }
  });
=======
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
    },100);
    
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

>>>>>>> test
