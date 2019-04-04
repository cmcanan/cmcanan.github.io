let SC_county = L.map('map3').setView([33.995698, -81.050963], 7)
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(SC_county)
let SCHospitalPoints = 'https://cmcanan.github.io/map3/SC_Hospitals_Point_data.geojson'
jQuery.getJSON(SCHospitalPoints, function (data) {
  L.geoJSON(data).addTo(SC_county)
})
let SCCountyLayer = 'https://cmcanan.github.io/map3/DLG_CountyBND.geojson'
jQuery.getJSON(SCCountyLayer, function (data) {
	let mapOptions = function (feature) {
  let stateColor = 'olive'
  return {
    color: 'orange',
    weight: 1,
    fillOpacity: 0.2
  }
}
	let styleOptions = { style: mapOptions }
	L.geoJSON(data, styleOptions).addTo(SC_county)
})
