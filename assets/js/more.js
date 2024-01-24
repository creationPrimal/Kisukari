

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



