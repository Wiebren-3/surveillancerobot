<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Add Route</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
</head>
<body>
	<h1>Add Route</h1>
	<div id="map" style="height: 500px;"></div>
	<button id="reset-button">Reset Markers</button>

	<script>
		var map = L.map('map').setView([51.505, -0.09], 13);
		
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 18,
			id: 'osm'
		}).addTo(map);
		
		var markers = [];
		
		map.on('click', function(e) {
			markers.push(e.latlng);
			drawMarkers();
			drawRoute();
		});
		
		function drawMarkers() {
			for (var i = 0; i < markers.length; i++) {
				var marker = L.marker(markers[i]).addTo(map);
			}
		}
		
		function drawRoute() {
			if (markers.length > 1) {
				var route = L.polyline(markers).addTo(map);
			}
		}
		
		document.getElementById('reset-button').addEventListener('click', function() {
			for (var i = 0; i < markers.length; i++) {
				map.removeLayer(markers[i]);
			}
			markers = [];
			map.removeLayer(route);
		});
	</script>
</body>
</html>
