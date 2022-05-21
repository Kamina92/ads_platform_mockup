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

