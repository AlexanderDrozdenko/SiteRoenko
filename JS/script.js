$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
         $('body').toggleClass('lock');
   })
})
function myMap() {
   var mapCanvas = document.getElementById(".map");
   var mapOptions = {
       center: new google.maps.LatLng(51.5, -0.2),
       zoom: 10
   };
   var map = new google.maps.Map(mapCanvas, mapOptions);
}