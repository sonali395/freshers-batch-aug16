function check()
{
var a=[13,24,30,22,49];
var len=a.length;
var sum=0;
var avg=0;
var min=a[0];
var max=a[0];
	
for(i=0;i<len;i++)
{
	sum=sum+a[i];

}
for(i=1;i<len;i++)
{
if(min>a[i])
	min=a[i];

}
for(i=1;i<len;i++)
{
if(max<a[i])
	max=a[i];

}
avg=sum/len;
document.write("Sum:"+sum);
//document.write(" ")
document.write("\naverage  is:"+avg);
//document.write(" ")
document.write(" minimum is:"+min);
document.write(" ");
document.write(" maximum array is:"+max);
}