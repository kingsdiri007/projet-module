// IMAGE SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
//video buttons
const video = document.getElementById('trailer');
const playPauseButton = document.getElementById('playPauseButton');
const playImage = document.getElementById('playImage');
const pauseImage = document.getElementById('pauseImage');
const forwardButton = document.getElementById('forward');
const backwardButton = document.getElementById('backward');
let counter = 0;

playPauseButton.addEventListener('click', () => {
    if (counter === 0) {
        video.play();
        counter++;
        playImage.style.display = 'block';
        pauseImage.style.display = 'none';
    } else if (counter === 1) {
        video.pause();
        counter--;
        playImage.style.display = 'none';
        pauseImage.style.display = 'block';
    }
});
forwardButton.addEventListener('click', () => {
    video.currentTime += 10;

});
backwardButton.addEventListener('click', () => {
    video.currentTime -= 10;

});
