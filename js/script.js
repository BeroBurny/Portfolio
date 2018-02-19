document.addEventListener("DOMContentLoaded", function(event) {
	sysHeight();
});

window.addEventListener('resize', sysHeight);

function sysHeight(){
	const h = document.getElementsByClassName("about-text")[0].clientHeight;
	if(h) document.getElementsByClassName("potrait-space")[0].style.height = h + "px";
}
