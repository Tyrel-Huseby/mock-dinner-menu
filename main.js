var counter = 0;;
document.getElementById('sides').style.display = "none";

function doOnClick(element) {
	var choice_append = element.parentElement.querySelector('h2').innerHTML;
	document.getElementsByClassName('choice')[counter].innerText = choice_append;
	
	if (element.querySelector('h3') != null) {
		var addTotal = element.querySelector('h3').innerHTML;
		document.getElementById('total').querySelector('h1').innerText = `Your total is ${addTotal}`;
		counter++;
		
		if (counter != 0) {
		document.getElementById('entrees').style.display = "none";
		document.getElementById('sides').style.display = "block";
		}
	} else {counter++;}	
}

function removeFromChoice(element) {
	if (element === document.getElementsByClassName('choice')[0]){
		document.getElementById('total').querySelector('h1').innerText = `Your total is $0`;
		element.innerText = '';
		counter = 0;
		document.getElementById('entrees').style.display = "block";
		document.getElementById('sides').style.display = "none";
	} else if (element === document.getElementsByClassName('choice')[1]){
		element.innerText = '';
		counter = 1;
	} else if (element === document.getElementsByClassName('choice')[2]){
		element.innerText = '';
		counter = 2;
	}
}

