function calc() {
	
	var age =document.getElementById('age').value;
	var d=new Date();
	var current=d.getFullYear();
	var birthyear=current-age;
	alert(birthyear);
	
} 


