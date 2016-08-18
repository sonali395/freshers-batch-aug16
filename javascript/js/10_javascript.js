function show()
{
	var a = new Array(4, 11, 2, 10, 3, 1);

	var b = a.sort();
	document.write(b);
	document.write("<br/>");
	b = a.sort(CompareForSort);
	document.write(b);
	document.write("<br/>");
	function CompareForSort(first, second)
	{
		
	    if (first == second)
	        return 0;
	    if (first < second)
	        return -1;
	    else
	        return 1; 
	  
	}
	
}

