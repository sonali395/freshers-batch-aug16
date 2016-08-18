function validate()
{
	var flag = 0;
var uname = document.getElementById('uname').value;
var password = document.getElementById('password').value;

if(uname == "shreya" && password =="shukla")
	{
	alert("successful!!!");
	}
else
{
 flag = flag+1;
 alert()
 if(flag==3)
	 {
	 alert("you are blocked");
	 }
 else
	alert("failed");
}
	
}