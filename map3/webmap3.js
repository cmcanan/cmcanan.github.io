let SC_county = L.map('map3').setView([33.995698, -81.050963], 7)
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(SC_county)
let SCHospitalPoints = 'https://cmcanan.github.io/map3/SC_Hospitals_Point_data.geojson'
jQuery.getJSON(SCHospitalPoints, function (data) {
  L.geoJSON(data).addTo(SC_county)
})
let stateStyle = { color: 'orange' }
let stateGeojsonOptions = { style: stateStyle }
L.geoJSON(data, stateGeojsonOptions).addTo(SC_county)
