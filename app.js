var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

var markers = [];
var polyline;

map.on('click', function(e) {
    var marker = L.marker(e.latlng).addTo(map);
    markers.push(marker);
    
    if (markers.length > 1) {
        if (polyline) {
            map.removeLayer(polyline);
        }
        polyline = L.polyline(markers.map(function(m) { return m.getLatLng() }));
        polyline.addTo(map);
    }
    
    updateDistanceAndRotation();
});

function updateDistanceAndRotation() {
    var distance = 0;
    if (markers.length > 1) {
        for (var i = 0; i < markers.length - 1; i++) {
            distance += markers[i].getLatLng().distanceTo(markers[i + 1].getLatLng());
        }
    }
    document.getElementById('distance').innerHTML = 'Total Distance: ' + distance.toFixed(2) + ' meters';

    if (markers.length > 1) {
        var prevLatLng = markers[markers.length - 2].getLatLng();
        var currLatLng = markers[markers.length - 1].getLatLng();
        var dx = currLatLng.lat - prevLatLng.lat;
        var dy = currLatLng.lng - prevLatLng.lng;
        var angle = Math.atan2(dy, dx) * 180 / Math.PI;
        document.getElementById('rotation').innerHTML = 'Rotation: ' + angle.toFixed(2) + ' degrees';
    }
}


