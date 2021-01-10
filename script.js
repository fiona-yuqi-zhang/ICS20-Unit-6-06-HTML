const age = 14
document.getElementById('submit').addEventListener('click', number)
function number() {
  age = document.getElementById('age').value
  if (age > 14) {
    alert('Too big! try again!')
    }
  else if (age < 14) {
    alert ('Too small! try again!')
    }
  else {
    alert('You guess it right!')
  }
}