function ascending()
{
var num=[1,34,16,3];
var len=num.length;
for(i=0;i<len;i++)
{
for(j=0;j<len;j++)
	{
	if(num[j]>num[j+1])
	{
	var c=num[j];
	num[j]=num[j+1];
	num[j+1]=c;
	}
	}
}
for(i=0;i<len;i++)
{
document.write("\n"+num[i]);
}
}
