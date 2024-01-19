

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