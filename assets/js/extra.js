//to stop number input to go beyond zero
 // Use querySelectorAll to select all number input elements
 const numberInputs = document.querySelectorAll('input[type="number"]');

 // Add event listener to each number input
 numberInputs.forEach(function(input) {
   input.addEventListener('input', function() {
     // Get the input value
     let inputValue = parseInt(this.value, 10);

     // Check if the value is less than 0
     if (inputValue < 0 || isNaN(inputValue)) {
       // Reset the value to 0
       this.value = 0;
     }
   });
 });


 function validateForm() {
  var inputs = document.querySelectorAll('#myForm input, #myForm select');

  // Loop through all input and select elements
  inputs.forEach(function(input) {
      // Check if the input is required and empty
      if (input.validity.valueMissing) {
          setInvalidInput(input, 'Please fill out this field');
      } else {
          setValidInput(input);
      }

      // Additional check for <select> to ensure an option is selected
      if (input.tagName === 'SELECT' && input.value === '') {
          setInvalidInput(input, 'Please select an option');
      }
  });

  // If any input has an error, prevent form submission
  if (document.querySelector('.error-border')) {
      return false;
  }

  // If all validations pass, you can submit the form
  return true;
}

function setInvalidInput(inputElement, errorMsg) {
  inputElement.setCustomValidity(errorMsg);
  inputElement.classList.add('error-border');
}

function setValidInput(inputElement) {
  inputElement.setCustomValidity('');
  inputElement.classList.remove('error-border');
}

// confirm kama anakisukari to display the inputs of hide
const ninakisukari = document.querySelector('.ninakisukari');
const sinakisukari = document.querySelector('.sinakisukari');
const wenyekisukari = document.querySelector('.wenyekisukari');

ninakisukari.addEventListener("click", () => {
  wenyekisukari.style.display = 'flex'
  ninakisukari.style.border = '1px solid #d9232c'
  ninakisukari.style.color = 'white'
  ninakisukari.style.backgroundColor = '#d9232c'
  sinakisukari.style.color = 'black'
  sinakisukari.style.border = '1px solid #d9232c54'
  sinakisukari.style.backgroundColor = 'transparent'
})
sinakisukari.addEventListener("click", () => {
  wenyekisukari.style.display = 'none'
  ninakisukari.style.border = '1px solid #d9232c54'
  ninakisukari.style.color = 'black'
  ninakisukari.style.backgroundColor = 'transparent'
  sinakisukari.style.color = 'white'
  sinakisukari.style.border = '1px solid #d9232c'
  sinakisukari.style.backgroundColor = '#d9232c'
})



