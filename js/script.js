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

const playClip = function (clipNumber) {
	let clip = document.getElementById(`clip${clipNumber}`);
	clip.play(clipNumber)
}

const pauseClip = function (clipNumber) {
	let clip = document.getElementById(`clip${clipNumber}`);
	clip.pause(clipNumber)
}	


// TODO: Dynamically asign clipNumber to Evenlistener (Loop ?)

	// Targeting video element  
let section = document.getElementById("pair3");

	/* Applying mouseover event on video clip  
	and then we call play() */ 

 section.addEventListener("mouseover", function (e) { 
	 playClip(3) 
 }) 

	/* Applying mouseout event on video clip  
	and then we call pause()  */ 

 section.addEventListener("mouseout", function (e) { 
	pauseClip(3); 
 }) 