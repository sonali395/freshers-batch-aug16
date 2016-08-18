function table()
{
	var no=document.getElementById('no').value;
 var mult="";
	for(i=1;i<11;i++)
		{
		mult +=no+"x"+i+"="+no*i +"<br>";
		}
	document.getElementById('text').innerHTML = mult;
	 var r=confirm("do you want to continue with the next number");
	 if(r==true)
		 {
		 window.location="0_4table.html";
		 }
	 else
		 {
		 exit();
		 }
}