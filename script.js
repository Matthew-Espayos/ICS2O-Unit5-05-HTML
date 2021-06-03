// Creating variables
let number = 0
// Calculates area of a square
document.getElementById('mybutton').addEventListener('click', area)
function area () {
  number = document.getElementById('myinput').value
  number = parseInt(number)
  number = number ** 2
  alert(number)
}
