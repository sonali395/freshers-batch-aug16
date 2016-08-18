function check()
{
var user=document.getElementById('uname').value;
var reg = /^\w+([-+.']\ w+)*@\w+([-.]\ w+)*\.\w+([-.]\ w+)*$/;
	if (reg. test(user)){
	alert("welcome"); }
	else{
	alert(" invalid email address");
}
}