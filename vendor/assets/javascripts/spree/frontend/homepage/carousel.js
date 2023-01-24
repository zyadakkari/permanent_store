let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = Array.from(document.getElementsByClassName("carousel-screen"));
    let circles = Array.from(document.getElementsByClassName("circle"));
    let next = document.getElementsByClassName("next");
    let prev = document.getElementsByClassName("prev");
    next[0].style.display = "block";
    prev[0].style.display = "block";
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    for (i = 0; i < slides.length; i++) {circles[i].className.replace(" active", "");}
    if (n > slides.length-1 && n != 0) {slideIndex = slides.length-1}
    if (n == 0) {prev[0].style.display = "none";}
    if (n == slides.length-1) {next[0].style.display = "none";}
    if (n < 0) {slideIndex = 0}
    
    slides[slideIndex].style.display = "block";
    circles[slideIndex].className += " active";
}