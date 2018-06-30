function LinkTo(page) {
	var body = document.getElementById("body");
	body.classList.add("fade-out");
	setTimeout(function(){window.location.href = page;}, 700)
}