function check()  
{ 	
	var inputText = document.getElementById('email').value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(inputText)) 
	{
	
	alert("Welcome");
	}
else
	alert("Please enter the corrent email");
} 