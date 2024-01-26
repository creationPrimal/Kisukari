 // Function to update the progress bar based on a certain number
function updateProgressBar(value) {
  const progressBar = document.getElementById('myProgressBar');
  const percentage = ((30 - value) / 30) * 100; // Assuming the value ranges from 1 to 30
  progressBar.style.width = `${percentage}%`;

  if (value < 3) {
    number.style.color = 'red';
  }
}

// Function to update the countdown
function updateCountdown(targetDate) {
  function calculateTimeDifference() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.max(Math.floor(timeDifference / (1000 * 60 * 60 * 24)), 0);

    // Display the countdown on the HTML page
    document.querySelector('.countdown').innerHTML = `${days}`;
  }

  // Initial call to start the countdown
  calculateTimeDifference();

  // Update the countdown every 1 second
  const countdownInterval = setInterval(() => {
    calculateTimeDifference();
    
    // Check if the countdown is over and stop the interval
    if (document.querySelector('.countdown').innerHTML <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

// Check if there's a future date in the element
const futureDateParagraph = document.getElementById('futureDate');
const futureDateString = futureDateParagraph.textContent.trim();
const futureDate = new Date(futureDateString).getTime();

if (!isNaN(futureDate)) {
  // Start the countdown if a valid future date is found
  updateCountdown(futureDate);
} else {
  // Handle case where no valid future date is found
  console.error('Invalid future date:', futureDateString);
}
// Example usage:
// Call updateProgressBar with your desired value (e.g., 5 for 50%)
const number = document.querySelector('.countnumber');
const numbervalue = parseInt(number.textContent);
updateProgressBar(numbervalue);

   // JavaScript code to calculate the total for each number container and update the result span

        // Get all elements with the class 'number-container'
        var containers = document.querySelectorAll('.number-container');

        // Iterate through each container
        containers.forEach(function(container) {
            // Get all elements with the class 'number' within the current container
            var numberElements = container.querySelectorAll('.number');

            // Initialize the total variable for the current container
            var total = 0;

            // Iterate through each number element and add its value to the total
            numberElements.forEach(function(element) {
                total += parseInt(element.innerText);
            });

            // Update the result span within the current container with the calculated total
            container.querySelector('.result').innerText = total;
        });



// countdown of date to clinic






