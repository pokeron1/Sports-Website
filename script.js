	/*probably inefficient. Look over my code, will ya? at the bottom is most of my theme code*/
	var text=1;
	var theme1=["#e3f2fd","#ffffff","#b1bfca","#0d47a1","#5472d3","#002171"];
	var theme2=["red","blue","green","#ffff00","#ff00ff","#00ffff"];
	var themes[theme1,theme2];
	var customTheme["#e3f2fd","#ffffff","#b1bfca","#0d47a1","#5472d3","#002171"];
	var savedString="";
	var newTheme="";
	var activeTheme= 0;
	function LinkTo(page) {
		var body = document.getElementById("body");
		body.classList.add("fade-out");
		setTimeout(function(){window.location.href = page;}, 700);
		text=1;
	}

	function ShowOverlay(){
		var overlay = document.getElementById("overlay");
		overlay.classList.remove("overlay-fade-out");
		overlay.classList.add("overlay-fade-in");
		overlay.style.display = "block";
		overlay.style.height = "100%";
		overlay.style.width = "100%";
		text = 1;
		ChangeText("change", "1change");
	}

	function HideOverlay(){
		var overlay = document.getElementById("overlay");
		overlay.classList.remove("overlay-fade-in");
		overlay.classList.add("overlay-fade-out");
		setTimeout(function(){overlay.style.display = "none"}, 700);
		text = 1;
	}

	function Next(id){
		text+=1;
		var id2 = text.toString() + id;
		console.log('id2 is '+id2);
		ChangeText(id, id2);
	}

	function Back(id){
		text-=1;
		while (text <= 0){
			text = 1;
		}
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

	/*function ChangeText(id1, id2){
		var changeTo = document.getElementById(id2).innerHTML;
		var textToChange = document.getElementById(id1).innerHTML;
		console.log(`Text index is ${text}`);
		console.log(`Should change ${textToChange}`);
		console.log(`Should change to ${changeTo}`);
		while (changeTo == null) {
			text-= 1;
			id2 = text.toString() + text;
			changeTo = document.getElementById(id2);
			console.log(`changeTo is ${changeTo}`);
		}
		textToChange = changeTo;
		console.log(`Displaying ${document.getElementById(id1).innerText}`)
		console.log(`Should be displaying ${document.getElementById(id2).innerText}`)
	}*/

	function ChangeText(id1, id2){
		var changeTo = document.getElementById(id2);
		var textToChange = document.getElementById(id1);
		if (changeTo == null) {
			text -= 1;
			console.log(text);
			id2 = text.toString() + id1;
			ChangeText(id1, id2);
		}
		textToChange.innerHTML = changeTo.innerHTML;
	}

	function ChangeTheme(theme){
		document.cookie = `theme=${theme};path=/`;
	}

	function CreateTheme(){
		var n=0;
		while (n<6){
			savedString+=customTheme[n];
			savedString+=",";
			n+=1;
		document.cookie = `themeColours=`+savedString+`;path=/`;
		}
	}
	function RetrieveTheme(){
		var cookies= document.cookie.split(";");
		if (cookies[0].startsWith("themeColours") == true){
			newTheme= cookies[0].slice(13);
			newTheme=newTheme.slice(-7);
			newTheme=newTheme.split(",");
		}
		else if (cookies[1].startsWith("themeColours") == true){
			newTheme= cookies[1].slice(13);
			newTheme=newTheme.slice(-7);
			newTheme=newTheme.split(",");
		}
		else{
			newTheme= cookies[2].slice(13);
			newTheme=newTheme.slice(-7);
			newTheme=newTheme.split(",");
		}
	}
	function SetTheme(){
		var n=0;
		while (n<6){
			themes[activeTheme][n]=newTheme[n];
			n+=6;
		}
	}
	function runTheme{
		CreateTheme();
		RetrieveTheme();
		SetTheme();
	}
