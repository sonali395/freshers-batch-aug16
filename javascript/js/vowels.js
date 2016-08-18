function vowelno(){
	var v=document.getElementById('str').value;
	var a="";var b="";var c="";var d="";var e="";
	var res="";
	for(i=0;i<v.length;i++)
		{
		res=v.charAt(i);
		switch(res)
		{
		case 'a':a++;
		break;
		case 'e':b++;
		break;
		case 'i':c++;
		break;
		case 'o':d++;
		break;
		case 'u':e++;
			break;
		}
		}
	alert("a"+a+"b"+b+"c"+c+"d"+d+"e"+e);
	
	
}