

   // Get the modal and modal image elements
   var imageModal = document.getElementById('imageModal');
   var modalImage = document.getElementById('modalImage');
   
   // Get all elements with the class "imageToClick"
   var imageElements = document.querySelectorAll('.imageToClick');
   
   // Add click event listeners to each image element
   imageElements.forEach(function(imageElement) {
     imageElement.addEventListener('click', function() {
       // Set the source of the modal image to the clicked image
       modalImage.src = this.src;
       // Display the modal
       imageModal.style.display = 'flex';
     });
   });
   
   // Add a click event listener to close the modal when clicking outside the image
   imageModal.addEventListener('click', function(e) {
     if (e.target === this) {
       this.style.display = 'none';
     }
   }); 


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


        function predictDate() {
          // Get the user-input date
          const inputDate = document.getElementById('inputDate').value;

          // Convert the input date to a JavaScript Date object
          const currentDate = new Date(inputDate);

          // Calculate the date 30 days ahead
          const predictedDate = new Date(currentDate);
          predictedDate.setDate(currentDate.getDate() + 30);

          // Format the predicted date to YYYY-MM-DD
          const formattedPredictedDate = predictedDate.toISOString().split('T')[0];

          // Display the predicted date in the input field
          document.getElementById('predictedDate').value = formattedPredictedDate;

          // Allow the user to edit the predicted date
          document.getElementById('editedDate').value = formattedPredictedDate;
          document.getElementById('editedDate').removeAttribute('disabled');
      }


 // Function to calculate the remaining days between two dates
 function calculateRemainingDays(datePair) {
  const startDateText = datePair.querySelector('.start-date').innerText;
  const endDateText = datePair.querySelector('.end-date').innerText;

  const startDate = new Date(startDateText);
  const endDate = new Date(endDateText);

  // Calculate the difference in days
  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

 

  // Display the remaining days in the counter element
  datePair.querySelector('.days-counter').innerText = `${daysDifference}`;
  
}

// Example: Calculate remaining days for each date pair
document.querySelectorAll('.date-pair').forEach(function(datePair) {
  calculateRemainingDays(datePair);
  
});







