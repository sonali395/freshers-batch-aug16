function charno(){
	var v=document.getElementById('str').value;
	var e="";
	var res="";
	for(i=0;i<v.length;i++)
		{
		res=v.charAt(i);
		e++;
		}
	alert("total"+e);
	
	
}