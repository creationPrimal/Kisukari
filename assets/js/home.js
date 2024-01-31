

//loader
window.onload = function(){
    var preloader = document.getElementById('loadingdiv');
    preloader.style.display = 'none';
  };
  

  //notification
const notify = document.querySelector('.notifybtn');
const notificationdiv = document.querySelector('.notificationdiv');
const closenotify = document.querySelector('.closenotify');

notify.addEventListener("click", ()=>{
    if( notificationdiv.style.display ==='flex'){
        notificationdiv.style.display="none";}
        else {notificationdiv.style.display = 'flex';}
});
closenotify.addEventListener("click", ()=>{
    notificationdiv.style.display='none'
});

// JavaScript code to calculate the total for each number container and update the result span

        // Get all elements with the class 'number-container'
        var containers = document.querySelectorAll('.number-container2');

        // Iterate through each container
        containers.forEach(function(container) {
            // Get all elements with the class 'number' within the current container
            var numberElements = container.querySelectorAll('.number2');

            // Initialize the total variable for the current container
            var total = 0;

            // Iterate through each number element and add its value to the total
            numberElements.forEach(function(element) {
                total += parseInt(element.innerText);
            });

            // Update the result span within the current container with the calculated total
            container.querySelector('.result2').innerText = total;
        });
  