function calculate() {

	var age = document.getElementById('age').value;
    var date = new Date();
	var date_today = date.getFullYear();
	var birth_year = date_today-age;
	alert(birth_year);
}