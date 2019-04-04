let SC_county = L.map('map3').setView([33.995698, -81.050963], 7)
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(SC_county)
let SCCountyUrl = "https://lsuga.maps.arcgis.com/home/item.html?id=a5a8d9ccbf2f4957aa95a896cac6a1a1.geojson"
jQuery.getJSON(SCCountyUrl, function (data) {
  L.geoJSON(data).addTo(SC_County)
})
let stateStyle = { color: 'orange' }
let stateGeojsonOptions = { style: stateStyle }
L.geoJSON(data, stateGeojsonOptions).addTo(SC_County)
