let mouseCursor = document.querySelector('.cursor');
let navlinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navlinks.forEach(link => {

   link.addEventListener('mouseover', () => {
       mouseCursor.classList.add('link-grow');
       link.classList.add('hovered-link');
    });
    
    link.addEventListener('mouseleave', () => {
        link.classList.remove('hovered-link');
        mouseCursor.classList.remove('link-grow');
   });

});

