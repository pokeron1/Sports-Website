	var text=1

	function LinkTo(page) {
		var body = document.getElementById("body");
		body.classList.add("fade-out");
		setTimeout(function(){window.location.href = page;}, 700)
		text=1
	}

	function ShowOverlay(){
		var overlay = document.getElementById("overlay");
		overlay.classList.remove("overlay-fade-out");
		overlay.classList.add("overlay-fade-in");
		overlay.style.display = "block";
		overlay.style.height = "100%";
		overlay.style.width = "100%";
	}

	function HideOverlay(){
		var overlay = document.getElementById("overlay");
		overlay.classList.remove("overlay-fade-in");
		overlay.classList.add("overlay-fade-out");
		setTimeout(function(){overlay.style.display = "none"}, 700);
	}

	function Next(id){
		text+=1;
		var id2 = text.toString() + id;
		console.log('id2 is '+id2);
		ChangeText(id, id2);
	}

	function Back(id){
		text-=1;
		var id2 = text.toString() + id;
		console.log('id2 is '+id2);
		ChangeText(id, id2);
	}

	/*function ChangeText(id) {
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
	}*/

	function ChangeText(id1, id2){
		var changeTo = document.getElementById(id2).innerHTML;
		var textToChange = document.getElementById(id1).innerHTML;
		console.log(`Text index is ${text}`);
		console.log(`Should change ${textToChange}`);
		console.log(`Should change to ${changeTo}`);
		while (changeTo = null) {
			text-= 1;
			var changeTo = document.getElementById(id2);
			console.log(`changeTo is ${changeTo}`);
		}
		textToChange = "changeTo";
		console.log(`Displaying ${document.getElementById(id1).innerText}`)
		console.log(`Should be displaying ${document.getElementById(id2).innerText}`)
	}