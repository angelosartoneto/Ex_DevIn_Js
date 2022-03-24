var displayHours = document.getElementById('displayHours');
var displayMinutes = document.getElementById('displayMinutes');

var currentTime = new Date();

displayHours.innerHTML = currentTime.getHours() + " : ";
displayMinutes.innerHTML = currentTime.getMinutes() + " min.";

