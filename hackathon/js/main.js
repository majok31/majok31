let locationn = document.getElementById("imgs")
let button = document.getElementById("btn")
let image = document.getElementById("rcs")
button.addEventListener("click", function(e){
	e.preventDefault()
	locationn.setAttribute("src", "img/map.png")
	locationn.style.display = "none"
	image.style.display = "block"
})

