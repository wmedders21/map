function initMap(data) {

  var map = L.map('map');

  var zoom = map.getBoundsZoom([
    Object.values(data["markers"][0]),
    Object.values(data["markers"][1]),
    Object.values(data["markers"][2]),
    Object.values(data["markers"][3]),
    Object.values(data["markers"][4])
  ]);

  map.setView([data["map_center"][0], data["map_center"][1]], zoom - 1)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  for (const [key,value] of Object.entries(data["markers"])) {
    marker = L.marker([Object.values(value)[0][0], Object.values(value)[0][1]]).addTo(map);
    marker.bindPopup(Object.keys(value)[0]);
  };
};
