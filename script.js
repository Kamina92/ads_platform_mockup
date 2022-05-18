let toggleNav = document.querySelector('#toggleNav')


toggleNav.addEventListener('click',()=>{
    toggleNav.classList.toggle('fa-book');
    toggleNav.classList.toggle('fa-book-open');

})