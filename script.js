const links = document.querySelectorAll("a");
links.forEach(link => {
	if (link.textContent === "Live") {
		link.style.color = "rgb(52, 189, 52)";
	} else {
		link.style.color = "#c54cf5";
	}
});