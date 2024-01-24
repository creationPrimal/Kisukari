

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


  