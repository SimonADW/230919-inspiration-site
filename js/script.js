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


// Clips play on parent hover @TODO: Devtools return error, but hover works.?

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

// Dark / Light mode

/** 
 * Toggles dark/light modes
 * @function 
 * @returns boolean */
const toggleDarkButton = document.querySelector(".mode");
let isDark = false;
function toggleDark() {
	if(!isDark) {
		const root = document.documentElement;
		root.style.setProperty("--color-background", "#162e42");  /* Black alternative #000000 */
		root.style.setProperty("--color-foreground", "#eef0de");
		root.style.setProperty("--color-primary", "linear-gradient(to left, #53442a, #362d2d)");
		document.querySelector(".mode").textContent = "Light";
		isDark = true;
	} else {
		const root = document.documentElement;
		root.style.setProperty("--color-background", "white",);
		root.style.setProperty("--color-foreground", "black");
		root.style.setProperty("--color-primary", "#F1EADE");
		document.querySelector(".mode").textContent = "Dark";
		isDark = false;
	}
}

toggleDarkButton.addEventListener("click", toggleDark);