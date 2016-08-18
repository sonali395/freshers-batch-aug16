function fact() {

	
	var fact=1;
	var num= parseInt(document.getElementById('num').value);
	for(var i=1; i<=num; i++)  
	{
	fact= fact*i;
	}  
	document.getElementById('fact_result').innerHTML= fact;
	
}

