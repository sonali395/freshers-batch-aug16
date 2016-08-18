function table() {

	var num = document.getElementById('num').value;
	
	var showtext = "";
	for (var i = 1; i <=10; i++) {
		
      showtext += i*num + "<br>";	
      document.getElementById('table').innerHTML = showtext ;
	}	
	

	var r = confirm(" Do you wish to generate a new table??? ");
	if (r == true) {
	   window.location = "04_javascript.html";
	} else {
	    exit();
	}

}

