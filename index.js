const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');
const sound = new Audio ('./Theme-Song.mp3');

playBtn.addEventListener('click', () =>{
    sound.play();
})

toggle.addEventListener ('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
});
