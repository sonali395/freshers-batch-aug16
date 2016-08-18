function vowel()
{
	var v=document.getElementById('alpha').value
	switch(v)
	{
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':alert("is a vowel");
		break;
		default:
			alert("not a vowel");
	}
}