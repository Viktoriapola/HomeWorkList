
const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(function(item) {
	item.addEventListener("click", function (event) {
		item.classList.toggle("active");
		if (event.target.tagName === "li") {
			item.querySelector("input").value = event.target.innerText;
		};
	});
});











