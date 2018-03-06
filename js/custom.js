const position = [37.822165, -122.000763]; //pin
const centerPosition = [37.822165, -122.000763];

function showGoogleMaps() {
  const latLng = new google.maps.LatLng(position[0], position[1]);
  const centerLatLng = new google.maps.LatLng(
    centerPosition[0],
    centerPosition[1]
  );
  //map options
  const mapOptions = {
    zoom: 16,
    streetViewControl: false,
    scaleControl: true,
    mapTypeId: 'roadmap',
    center: centerLatLng
  };
  // create map
  map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

  // Show marker
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  });
}
//Maps event
google.maps.event.addDomListener(window, 'load', showGoogleMaps);
