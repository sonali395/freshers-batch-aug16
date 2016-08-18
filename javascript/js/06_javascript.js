function prime_num()
{
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var num1 = parseInt(num1);
	var num2 = parseInt(num2);

	for (var counter = num1; counter <= num2; counter++) {

	    var notPrime = false;
	    for (var i = 2; i <= counter; i++) {
	        if (counter%i==0 && i!=counter) {
	            notPrime = true;
	        }
	    }
	    if (notPrime == false) {
	    	result += counter + "<br/>";
	    	             
	    }
	    document.getElementById('result').innerHTML = result;
	}
	
	
}

