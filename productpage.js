//code to count products in product page
const buttons = document.querySelectorAll('.more, .less');
const cartamount = document.querySelector('.cartamount');

let counter = 0;

// Function to update the counter and display it in the <input> element
function updateCounter() {
  cartamount.value = counter;
}

// Function to handle button clicks
function buttonClick(event) {
  if (event.target.classList.contains('more')) {
    counter++;
  } else if (event.target.classList.contains('less')) {
    if (counter >= 1) {
      counter--;
    }
  }
  updateCounter();
}

// Attach event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', buttonClick);
});

// Initial counter display
updateCounter();


       //fifth slider
const relatedproducts = new Splide( '#relatedproducts', {
  perPage: 4,
  gap : '1rem',
  drag : 'free',
  perMove: 1,
  padding: { left: 0, right: 80 },
  snap: true,
  type: 'loop',
  pagination: false,
  autoplay: false,
  breakpoints: {

    1200: {
    perPage: 4,
    padding: { left: 0, right: 20 },
    },
    1104: {
    perPage: 3,
    padding: { left: 0, right: 100 },
    },
    964: {
    perPage: 3,
    padding: { left: 0, right: 50 },
    },
    884: {
    perPage: 2,
    padding: { left: 0, right: 180 },
    },
    764: {
    perPage: 3,
    padding: { left: 0, right: 20 },
    },
    678: {
      perPage: 2,
      padding: { left: 0, right: 170 },
    },
    610: {
      perPage: 2,
      padding: { left: 0, right: 130 },
    },
    580: {
      perPage: 2,
      padding: { left: 0, right: 80 },
    },
    520: {
      perPage: 2,
      padding: { left: 0, right: 30 },
    },
    470: {
      perPage: 2,
      padding: { left: 0, right: 0 },
    },
    440: {
      perPage: 1,
      padding: { left: 0, right: 170 },
    },
    390: {
      perPage: 1,
      padding: { left: 0, right: 120 },
    },
    335: {
      perPage: 1,
      padding: { left: 0, right: 50 },
    },
    },
  } );
  relatedproducts.mount()

// JavaScript to handle full-screen image display
const thumbnails = document.querySelectorAll('.thumbnail');
const fullscreenImageContainer = document.getElementById('fullscreen-image-container');
const fullscreenImage = document.getElementById('fullscreen-image');

thumbnails.forEach(thumbnail => {
thumbnail.addEventListener('click', () => {
    fullscreenImage.src = thumbnail.src;
    fullscreenImageContainer.style.display = 'block';
});
});

fullscreenImageContainer.addEventListener('click', () => {
fullscreenImageContainer.style.display = 'none';
});


//share button API

function copyAndShare() {
  // Get the current webpage URL
  const currentUrl = window.location.href;

  // Copy the URL to the clipboard
  navigator.clipboard.writeText(currentUrl)
    .then(() => {
      console.log('URL copied to clipboard:', currentUrl);
      // Check if the share API is available
      if (navigator.share) {
        // Share the URL
        navigator.share({
          title: 'Share URL',
          url: currentUrl
        })
        .then(() => console.log('URL shared successfully'))
        .catch((error) => console.error('Error sharing URL:', error));
      } else {
        // If share API is not available, notify the user
        alert('Share API not supported in this browser');
      }
    })
    .catch((error) => {
      console.error('Error copying to clipboard:', error);
      alert('Failed to copy URL to clipboard');
    });
}

//changing add to cart html text
const addcart = document.getElementById(`product${productId}`);
const productname = document.getElementById(`product${productId}`);
const addtocart = document.getElementById(`product${productId}`);


    
    function changeaddcarttext(){
        const productId = 1;
        const addcart = document.getElementById(`product${productId}`);
        const addtocart = document.getElementById(`product${productId}`);

        addcart.innerHTML = 'Added To Cart';
        addtocart.style.backgroundColor = 'rgb(112, 112, 253)'
        localStorage.setItem(`changedaddcarttext_${productId}`, 'true');
    }

    const productId = 1; // This should be dynamically set for each product
    const changedtrue = localStorage.getItem(`changedaddcarttext_${productId}`);

    if (changedtrue === 'true') {
    changeaddcarttext(); // Execute the function if the flag is true
    }
   const productnametext = productname.innerHTML;
    addtocart.addEventListener("click", () => {
        const cartconfirmation = confirm(`Are you sure you want to add "${productnametext}" to cart?`);
        if (cartconfirmation) {
          changeaddcarttext();
        } else {
          // If the user cancels, and you want to remove the previous change:
          const productId = 1;
          const addcart = document.getElementById(`product${productId}`);
          const addtocart = document.getElementById(`product${productId}`);

            addcart.innerHTML = 'Add to Cart';
            addtocart.style.backgroundColor = 'orangered'; // Restore original color
            localStorage.removeItem('changedaddcarttext');
                }
      });






