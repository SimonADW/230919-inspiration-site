


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