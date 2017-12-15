var map = L.map("map").setView([30.868056, 79.032222], 4);

var mapLayer = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
  }
);

var marker = L.marker([30.868056, 79.032222]);
var popup = L.popup().setContent("Meru Peak");
marker.bindPopup(popup);
marker.addTo(map);

mapLayer.addTo(map);
