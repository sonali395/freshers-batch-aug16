function dividecheck(){
	var dividend=document.getElementById('no1').value;
	var divisor=document.getElementById('no2').value;
	if(divisor==0)
		{
		alert("divisor cannot be zero");
		}
	else
		{
		var quotient=dividend/divisor;
		alert(quotient);
		}
}