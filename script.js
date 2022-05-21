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