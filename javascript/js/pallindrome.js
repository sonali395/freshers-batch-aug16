function pallindrome()
{
	var v=document.getElementById('str').value;
	var temp=""; var c=""; var ch="";
	for(i=0;v[i]!='\0';i++)
	 {
	  c++;
	 }
	 for(i=c-1,j=0;i>=0;i--,j++)
	 {
	  ch[j]=v[i];
	 }
	 for(i=0;i<c;i++)
	 {
	  if(v[i]!=ch[i])
	  {
	   temp=1;
	   break;
	  }
	 }
	 if(temp==1)
	 {
	  alert("Consonant");
	 }
	 else
	 {
	  alert("Palindrome");
	 }
}
	