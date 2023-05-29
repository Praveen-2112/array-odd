var arr=[23,45,56,24,67,88,46,50];
var count=0;
document.write("odd number is:");
document.write("<br>");
for(let i=0;i<arr.length;i++)
{
	if(arr[i]%2!=0)
	{
		document.write(arr[i]);
		document.write("<br>");
		count++;
	}
}
	document.write("Number of odd number"+" "+count);