let toggleNav = document.querySelector('#toggleNav')
let logIn = document.querySelector('#logIn')
let srcBar = document.querySelector('#srcBar')
let exitLog = document.querySelector('#exitLog')

toggleNav.addEventListener('click',()=>{
    toggleNav.classList.toggle('fa-book');
    toggleNav.classList.toggle('fa-book-open');

})

logIn.addEventListener('click',()=>{

    srcBar.classList.remove('scrBar');
    srcBar.classList.add('srcBarActive');

})

exitLog.addEventListener('click',()=>{
    srcBar.classList.remove('srcBarActive');
    srcBar.classList.add('scrBar');

})