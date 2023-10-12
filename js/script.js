// Drawer animation

const hamburger = document.querySelector(".header__x-animation");
const drawer = document.querySelector(".nav-drawer");
const hamburgerXtop = document.querySelector(".header__x-animation-top-line");
const hamburgerXbottom = document.querySelector(".header__x-animation-bottom-line");
const hamburgerXcenter = document.querySelector(".header__x-animation-center-line");

let isOpenDrawer = false;

hamburger.addEventListener("click", ()=> {
	if(isOpenDrawer) {
		drawer.style.animation = "drawerSlideUp 400ms forwards";
		hamburgerXtop.style.animation = "x-animation-top 400ms ease-in-out 100ms reverse";
		hamburgerXbottom.style.animation = "x-animation-bottom 400ms ease-in-out 100ms reverse";
		hamburgerXcenter.style.opacity = "1";
	} else {
		drawer.style.animation = "drawerSlideDown 400ms forwards";
		hamburgerXtop.style.animation = "x-animation-top 400ms ease-in-out 100ms forwards";
		hamburgerXbottom.style.animation = "x-animation-bottom 400ms ease-in-out 100ms forwards";
		hamburgerXcenter.style.opacity = "0";
	}
	isOpenDrawer = !isOpenDrawer;
});


// Clips play on parent hover

const imageCaptionPairs = document.querySelectorAll(".image-caption-pair");

function playClip() {
	const clip = this.querySelector("video");
	clip.play();
};

function pauseClip() {
	const clip = this.querySelector("video");
	clip.pause();
};

imageCaptionPairs.forEach(pair => { 
	pair.addEventListener("mouseover", playClip);
	pair.addEventListener("mouseout", pauseClip);	
});