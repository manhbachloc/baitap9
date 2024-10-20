let slideIndex = 0;
showSlides(slideIndex);

// chuyển ảnh 
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n >= slides.length) {
        slideIndex = 0; //  slide đầu
    }

    if (n < 0) {
        slideIndex = slides.length - 1; // slide cuối cùng
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // ẩn  các slide
    }

    slides[slideIndex].style.display = "block"; // show slide hiện tại
}