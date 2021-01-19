var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("images");
	var textSlide = document.getElementsByClassName("text");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";

	if (n > textSlide.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = textSlide.length;
	}
	for (i = 0; i < textSlide.length; i++) {
		textSlide[i].style.display = "none";
	}
	textSlide[slideIndex - 1].style.display = "block";
}
