// The big bag theory javascript file 

// DOM button selectors
const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');
const sound = new Audio ('./Theme-Song.mp3');
const button = document.querySelector(".button");
const imageButton = document.querySelector(".button-image");
let isMute  = true;

// Boolean conditional that handles the state of the music
sound.volume = 0.3;
sound.addEventListener("ended", () => {
    if(!isMute) {
        sound.play();
    }
})

// Boolean conditional that handles the state of the music
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

// This for the activation of the button that let you see the home, contacts and meet the team
toggle.addEventListener ('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
});
