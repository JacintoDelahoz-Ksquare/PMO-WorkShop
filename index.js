const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');
const sound = new Audio ('./Theme-Song.mp3');

document.addEventListener("scroll", () =>{
    sound.play();
})

toggle.addEventListener ('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
});
