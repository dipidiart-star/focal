
let goBack = document.getElementById('goBack').addEventListener("click", function(){window.history.back()})
let bg = document.getElementById("backgroundImageID")

bg.style.transition = 'opacity 1s ease-in-out';

const folders = ['Overworked', 'TheBustlingCity', 'UnderTheTree'];
const focals = [10, 16, 24, 35, 50, 75, 100];

function setRandomBackground() {

    bg.style.opacity = '0';

    setTimeout(() => {
        const randomFolder = folders[Math.floor(Math.random() * folders.length)];
        const randomFocal = focals[Math.floor(Math.random() * focals.length)];
        bg.style.backgroundImage = `url(images/${randomFolder}/${randomFocal}mm.jpg)`;
        bg.style.opacity = '1';
    }, 1000); 
}


setRandomBackground();


setInterval(setRandomBackground, 5000);

