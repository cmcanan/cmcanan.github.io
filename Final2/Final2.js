let SC_county = L.map('FinalMap').setView([33.995698, -81.050963], 7)
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(SC_county)
let SCHospitalLayer = 'https://cmcanan.github.io/Final2/SC_Hospitals_Point_data.geojson'
jQuery.getJSON(SCHospitalLayer, function (data) {
  let colorStyle = function (feature) {
		}
  }
  let createHospitalPopup = function (feature, layer) {
	  let name = feature.properties.Hospital
	  let size = feature.properties.Beds
	  layer.bindPopup('Size of ' + name + '= ' + size + ' beds' )
  }
  let SCHospitalGeoJSON = {
    style: colorStyle,
    onEachFeature: createCountyPopup
  }
  L.geoJSON(data, SCHospitalGeoJSON).addTo(SC_county)
})
