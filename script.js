// function myMap() {
// var mapProp= {
//   center:new google.maps.LatLng(51.508742,-0.120850),
//   zoom:5,
// };
// var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }

// The function actually applying the offset
// function offsetAnchor() {
//   if (location.hash.length !== 0) {
//     window.scrollTo(window.scrollX, window.scrollY - 100);
//   }
// }

// // Captures click events of all a elements with href starting with #
// $(document).on('click', 'a[href^="#"]', function(event) {
//   // Click events are captured before hashchanges. Timeout
//   // causes offsetAnchor to be called after the page jump.
//   window.setTimeout(function() {
//     offsetAnchor();
//   }, 0);
// });

// // Set the offset when entering page with hash present in the url
// window.setTimeout(offsetAnchor, -100);
