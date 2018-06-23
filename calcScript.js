function calcAge() {
  var date = document.getElementById('date').value;
  var today = new Date();
  var bDay = new Date(date);
  var age = today.getFullYear() - bDay.getFullYear();
  var monthTest = today.getMonth() - bDay.getMonth();

    if (monthTest < 0 || (monthTest == 0 && today.getDate() < bDay.getDate() )) {
        age--;
    }
    document.getElementById('results').innerHTML = "Your Age was successfully Calculated and is "+age;
}