document.addEventListener("DOMContentLoaded", function(event) {
	sysHeight();
});

window.addEventListener('resize', sysHeight);

function sysHeight(){
	if(window.innerWidth > 1300){
		const h = document.getElementsByClassName("about-text")[0].clientHeight;
		if(h) document.getElementsByClassName("potrait-space")[0].style.height = h + "px";
	} else document.getElementsByClassName("potrait-space")[0].style.height = "auto";
	for (let picture of document.getElementsByClassName("picture")) picture.style.height = (picture.clientWidth * 0.5625) + "px";
}
