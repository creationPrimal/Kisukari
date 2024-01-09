
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

})()

//showing form to asq questions

const asq = document.querySelector('.asqquestion');
const asqformdiv = document.querySelector('.asqformdiv');
const closetag = document.querySelector('.closetag');
const asqclosediv = document.querySelector('.asqclosediv');

asq.addEventListener("click", ()=>{
  asqformdiv.style.display = 'flex'
  asq.style.display = 'none'
})
closetag.addEventListener("click", ()=>{
  asqformdiv.style.display = 'none'
  asq.style.display = 'flex'
})
asqclosediv.addEventListener("click", ()=>{
  asqformdiv.style.display = 'none'
  asq.style.display = 'flex'
})

//loading more questions
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.comment');
  const loadMoreBtn = document.getElementById('loadmore');
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


//going back history
function back()  {
  window.history.back(); // Go back in the browsing history
};


// hidding backgrount of text in chat
document.addEventListener('DOMContentLoaded', function() {
  const emptyParagraphs = document.querySelectorAll('.text:empty');
  emptyParagraphs.forEach(paragraph => {
    paragraph.parentElement.style.backgroundColor = 'transparent';
    // Adjust other styling as needed
  });
});


//password visibility
function showpassword() {
  const passwordinput = document.querySelector('.password')
  const hide = document.querySelector('.hide')
  const showcode = document.querySelector('.show')

  if (passwordinput.type = 'password') {
    passwordinput.type = 'text'; // Change input type to text
    hide.style.display = 'flex'
    showcode.style.display = 'none'
  }
};
function hidepassword() {
  const passwordinput = document.querySelector('.password')
  const hide = document.querySelector('.hide')
  const showcode = document.querySelector('.show')

  if (passwordinput.type = 'text') {
    passwordinput.type = 'password'; // Change input type to password
    showcode.style.display = 'flex'
    hide.style.display = 'none'
  }
};











