function divide() {
	

	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	
if(num2==0)
	{
alert("please enter the proper value!!!");
	}
else
	{
	var result =num1/num2;
	document.getElementById('result').innerHTML = result;
	}
}