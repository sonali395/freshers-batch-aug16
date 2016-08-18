
function check()
{
	
	var str = document.getElementById('word').value;
	var result = checkPalindrome(str);
	alert('The Entered String "'+ str +'" is "'+result+'"');
}

function checkPalindrome(str)
{
	var orignalStr;
	str = str.toLowerCase();
	orignalStr = str;
	str = str.split(''); 
	str = str.reverse(); 
	str = str.join(''); 
	var reverseStr = str;	
	if(orignalStr == reverseStr){
		return 'Palindrome'; 
	}else{
		return 'consonent';
	}
}