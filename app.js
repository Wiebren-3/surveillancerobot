var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
}).addTo(map);

var markers = [];

function onMapClick(e) {
  var marker = L.marker(e.latlng).addTo(map);
  markers.push(marker);
  if (markers.length > 1) {
    var lastMarker = markers[markers.length - 2];
    var polyline = L.polyline([lastMarker.getLatLng(), marker.getLatLng()], { color: 'red' }).addTo(map);
    markers[markers.length - 2].polyline = polyline;
  }
  if (markers.length > 2) {
    var firstMarker = markers[0];
    var lastMarker = markers[markers.length - 1];
    var polyline = L.polyline([lastMarker.getLatLng(), firstMarker.getLatLng()], { color: 'red' }).addTo(map);
    markers[0].polyline = polyline;
  }
}

map.on('click', onMapClick);

document
