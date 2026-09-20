const userLang = navigator.language || navigator.userLanguage;

const message = document.getElementById("message");

const backgroundImages = [
	"/images/background/BG1.webp",
	"/images/background/BG2.webp"
];

const slideInterval = 5000;

if (!userLang.startsWith("ja")) {
	message.hidden = false;
	message.innerHTML = "Sorry, this page is only available in Japanese."
}

function showRouteError() {
	const query = new URLSearchParams(window.location.search);

	if (query.get("error") === "404" && message) {
		message.innerHTML = "404 Not Found<br>ページが見つからないため、メインページに飛びました";
		message.hidden = false;
	}
}

function startBackgroundSlideshow() {
	if (backgroundImages.length === 0) {
		return;
	}

	const slideshow = document.createElement("div");
	slideshow.className = "background-slideshow";
	document.body.prepend(slideshow);

	const slides = backgroundImages.map((imagePath) => {
		const slide = document.createElement("div");
		slide.className = "background-slide";
		slide.style.backgroundImage = `url("${imagePath}")`;
		slideshow.append(slide);
		return slide;
	});

	let activeSlide = 0;
	slides[activeSlide].classList.add("is-active");

	if (slides.length < 2) {
		return;
	}

	window.setInterval(() => {
		const previousSlide = slides[activeSlide];
		previousSlide.classList.add("is-visible", "is-fading-out");
		previousSlide.classList.remove("is-active");
		activeSlide = (activeSlide + 1) % slides.length;
		slides[activeSlide].style.animation = "";
		slides[activeSlide].style.transform = "";
		slides[activeSlide].classList.add("is-active");

		window.setTimeout(() => {
			previousSlide.classList.remove("is-visible", "is-fading-out");
			previousSlide.style.animation = "none";
			previousSlide.style.transform = "translateX(-4%)";
		}, 1000);
	}, slideInterval);
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", () => {
		showRouteError();
		startBackgroundSlideshow();
	});
} else {
	showRouteError();
	startBackgroundSlideshow();
}
