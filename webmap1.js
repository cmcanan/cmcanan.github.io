let myMap = L.map('map1').setView([29.231155, -89.999163], 12)
//L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
let gifd = L.marker([29.231155, -89.999163]).addTo(myMap)
let myPolygon = L.polygon([
  [29.260670, -89.964004],
  [29.250728, -89.957063],
  [29.198470, -90.040388],
  [29.209122, -90.048133]
]).addTo(myMap);
var latlngs = [
    [29.262201, -89.961229],
    [29.204188, -90.040088]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(myMap);
MyMap.fitBounds(polyline.getBounds());
gifd.bindPopup('<em>GIFD </em>')
myPolygon.bindPopup('GIFD service area')
