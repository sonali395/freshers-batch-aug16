function calc()
{
	function getLetterPosition(allLetters, letter)
	{
	  return allLetters.indexOf(letter);
	}

	
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var letter = document.getElementById("al").value;
	var letterPosition = getLetterPosition(alphabet, letter);
	letterPosition = letterPosition+1;
	document.getElementById('al_position').innerHTML = "Position of " + letter + " is : " + letterPosition;

}