let SC_county = L.map('FinalMap').setView([33.995698, -81.050963], 7)
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(SC_county)
let SCCountyLayer = 'https://cmcanan.github.io/map3/DLG_CountyBND.geojson'
jQuery.getJSON(SCCountyLayer, function (data) {
  let colorStyle = function (feature) {
		let size = feature.properties.ACRES
		let countyColor = 'blue'
		if ( size < 600000 ) { countyColor = 'red'}
		return {
      color: countyColor,
      weight: 2,
      fillOpacity: 0.2
    }
  }
  let createCountyPopup = function (feature, layer) {
	  let name = feature.properties.COUNTYNM
	  let size = feature.properties.ACRES
	  layer.bindPopup('Size of ' + name + ' County' + '= ' + size + ' acres' )
  }
  let SCCountyGeoJSON = {
    style: colorStyle,
    onEachFeature: createCountyPopup
  }
  L.geoJSON(data, SCCountyGeoJSON).addTo(SC_county)
})
