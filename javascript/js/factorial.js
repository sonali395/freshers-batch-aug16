function factorial()
{
	var no=document.getElementById('no').value;
	var i=1;
	var f=1;
	while(i<=no){
	      f = f*i;
	      i++;
	  }
	alert(f)
}