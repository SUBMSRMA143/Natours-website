document.querySelector('body').addEventListener('mousemove', eyeball);
function eyeball(){
    const eye = document.querySelectorAll('.black');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 90;
        eye.style.transform = 'rotate(' + rot + 'deg)';
});
}
