document.addEventListener("DOMContentLoaded", function(event) {
	sysHeight();
});

window.addEventListener('resize', sysHeight);

function sysHeight(){
	const h = document.getElementsByClassName("about-text")[0].clientHeight;
	if(h) document.getElementsByClassName("potrait-space")[0].style.height = h + "px";
	for (let project of document.getElementsByClassName("project")) project.style.height = (project.clientWidth * 0.5) + "px";
	for (let picture of document.getElementsByClassName("picture")) picture.style.height = (picture.clientWidth * 0.66) + "px";
}
