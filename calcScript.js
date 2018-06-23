<script>
function calcAge() {
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var today = new Date();
  var bDay = new Date(year, month, date);
  
  var age = today.getFullYear() - bDay.getFullYear();
  var monthTest = today.getMonth() - bDay.getMonth();
  if (monthTest < 0 || (monthTest == 0 && today.getDate() < bDay.getDate())) {
        age--;
    }


  document.getElementById('results').innerHTML = age;
}
</script>