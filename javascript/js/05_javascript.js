function show_result() {
	var al =document.getElementById('al').value;
switch (al) {
case "a":
case 'A':
case 'e':
case 'E':
case 'i':
case 'I':
case 'o':
case 'O':
case 'u':
case 'U':
	alert("this is a vowel!!!");
	break;

default:
	alert("this is not a vowel!!!");
	break;
}
	
}