var Text=1;
function LinkTo(page) {
	var body = document.getElementById("body");
	body.classList.add("fade-out");
	setTimeout(function(){window.location.href = page;}, 700)
	Text=1
}
function Next(id){
	Text=Text+1;
	ChangeText(id);
}
function Back(id){
	Text=Text-1;
	ChangeText(id);
}
function ChangeText(id) {
	switch (Text) {
		case 0:
			Text=1;
			break;
		case 1:
			document.getElementById(id).innerHTML="I can't be bothered to type that all out again. You get the idea.";
			break;
		case 2:
			document.getElementById(id).innerHTML="Heres the second page! Theres 2 more.";
			break;
		case 3:
			document.getElementById(id).innerHTML="pretty easily scalable amirite?";
			break;
		case 4:
			document.getElementById(id).innerHTML="There's no more, turn back, young one. I've turned looping off for now.";
			break;
		case 5:
			Text=4;
	}
}
	
