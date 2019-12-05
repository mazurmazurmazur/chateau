// MAP BELOW
var map = L.map('leafletMap').setView([46.327, 29.287], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
L.tileLayer(
  'http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}'
).addTo(map);

var greenIcon = L.icon({
  iconUrl: '../images/faviconred.png',

  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 50] // point of the icon which will correspond to marker's location
});

var marker = L.marker([46.322, 29.29], { icon: greenIcon }).addTo(map);

//END MAP
