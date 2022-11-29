const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');
const sound = new Audio ('./Theme-Song.mp3');
const button = document.querySelector(".button");
const imageButton = document.querySelector(".button-image");
let isMute  = true;

sound.volume = 0.3;
sound.addEventListener("ended", () => {
    if(!isMute) {
        sound.play();
    }
})

button.addEventListener("click", () =>{
    isMute = !isMute;
    if(isMute){
        imageButton.src = "./img/mute.png";
        sound.pause();
    } else {
        sound.play();
        imageButton.src = "./img/volume.png"; 
    }
})

toggle.addEventListener ('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
});
