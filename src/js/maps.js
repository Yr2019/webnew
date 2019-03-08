function initMap() {
  // Map options
  var options = {
    zoom: 16,
    center: { lat: 55.611504, lng: 37.201304 }
  }

  // New map
  var map = new
    google.maps.Map(document.getElementById('map'), options);

  // Add marker

  var marker = new google.maps.Marker({
    position: { lat: 55.611504, lng: 37.201304 },
    map: map,
    title: 'Ремонт квартир',
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });
}
