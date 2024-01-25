 // Update the progress bar based on a certain number
 function updateProgressBar(value) {
  const progressBar = document.getElementById('myProgressBar');
  const percentage = ((30 - value) / 29) * 100; // Assuming the value ranges from 1 to 10
  progressBar.style.width = `${percentage}%`;

}

const number = document.getElementById('number');
const numbervalue = number.innerHTML
// Example usage:
// Call updateProgressBar with your desired value (e.g., 5 for 50%)
updateProgressBar(numbervalue);

const clinicdays = document.querySelector('.clinicdays')
if (numbervalue < 3) {
  number.style.color = 'red';
  clinicdays.style.backgroundColor = 'rgba(255, 0, 0, 0.273)';
}