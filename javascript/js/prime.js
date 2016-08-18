function primecheck()
{
var no1=document.getElementById('no1').value;
var no2=document.getElementById('no2').value;
var no1=parseInt(no1);
var no2=parseInt(no2);
 var a="";
var c="";
	for(i=no1;i<=no2;i++)
		{
		 for ( c = 2 ; c <= no1 - 1 ; c++ )
		   {
		      if ( no1%c == 0 )
		      {
			 break;
		      }
		   }
		   if ( c == no1 )
			   
		     a += no1;
		   
		   no1++;
		}document.getElementById('text').innerHTML = a;
	 
		}