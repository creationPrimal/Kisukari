
//loader
window.onload = function(){
    var preloader = document.getElementById('loadingdiv');
    preloader.style.display = 'none';
  };


//loading more questions
  document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.librarytopic');
    const loadMoreBtn = document.getElementById('loadtopics');
    const itemsPerPage = 8; // Number of items to show per click
    let visibleItems = itemsPerPage;
  
    // Function to show items based on the current count
    function showItems() {
      for (let i = 0; i < visibleItems; i++) {
        if (items[i]) {
          items[i].style.display = 'flex'; // Display the items
        }
      }
      // Hide 'Load More' button when all items are visible
      if (visibleItems >= items.length) {
        loadMoreBtn.style.display = 'none';
      }
    }
  
    // Show initial set of items
    showItems();
  
    // On clicking the "Load More" button, display more items
    loadMoreBtn.addEventListener('click', function() {
      visibleItems += itemsPerPage; // Increase the count of visible items
      showItems(); // Call the function to show more items
    });
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




//implementing dark mode

const darkmodeButton = document.getElementById('darkmode');
const body = document.body;

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('isDarkMode', isDarkMode);
  }

  darkmodeButton.addEventListener('click', toggleDarkMode);

  // Check if dark mode is stored in local storage on page load
  window.addEventListener('load', () => {
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    if (isDarkMode) {
      body.classList.add('dark-mode');
    }
  });


    



