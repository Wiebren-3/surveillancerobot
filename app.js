var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

var distance = 0;

map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'marker') {
        distance = 0;
        drawnItems.clearLayers();
        drawnItems.addLayer(layer);
    } else if (type === 'polyline') {
        drawnItems.addLayer(layer);
        var latlngs = layer.getLatLngs();
        for (var i = 0; i < latlngs.length - 1; i++) {
            distance += latlngs[i].distanceTo(latlngs[i + 1]);
        }
    }
    document.getElementById('distance').innerHTML = 'Total Distance: ' + distance.toFixed(2) + ' meters';
});
