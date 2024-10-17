var typed = new Typed(".text", {
    strings:["Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
var typed = new Typed(".java", {
    strings:["Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
var typed = new Typed(".cont", {
    strings:["Lets work together"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});



let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 65){
        clearInterval();
    }else{
          counter += 1;
    number.innerHTML = counter + "%"
    }
}, 30);
let nUmber = document.getElementById("numbertwo");
let cOunter = 0;
setInterval(() => {
    if(cOunter == 40){
        clearInterval();
    }else{
          cOunter += 1;
    nUmber.innerHTML = cOunter + "%"
    }
}, 30);
let Number = document.getElementById("numberthree");
let Counter = 0;
setInterval(() => {
    if(Counter == 5){
        clearInterval();
    }else{
          Counter += 1;
    Number.innerHTML = Counter + "%"
    }
}, 30);

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    });
    // script.js

let slideIndex = 0;
showSlides();

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}



