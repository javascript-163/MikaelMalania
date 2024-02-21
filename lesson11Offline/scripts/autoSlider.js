let slideIndex = 0;
autoSlider();
function autoSlider() {
    let i;
    let slides = document.getElementsByClassName("myPictures");
    let dots = document.getElementsByClassName("dot");


    for (i = 0; i < slides.length; i++) {
        console.log(slides[i])
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "")
    }

    slideIndex = slideIndex + 1;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    };

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activeDot";

    setTimeout(autoSlider, 2000); // ფუნქციის რეკურსიული გამოძახება
}