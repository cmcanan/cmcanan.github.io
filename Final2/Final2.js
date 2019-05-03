let SC_Hospitals = L.map('FinalMap').setView([33.995698, -81.050963], 7)
let baseStreet = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(SC_Hospitals)
let basemaps = {
  'streets': baseStreet
}
let countyLayer = L.layerGroup().addTo(SC_Hospitals)
let pointLayer = L.layerGroup().addTo(SC_Hospitals)
let densityLayer = L.layerGroup().addTo(SC_Hospitals)
let SCCountyLayer = 'https://cmcanan.github.io/Final2/DLG_CountyBND.geojson'
jQuery.getJSON(SCCountyLayer, function (data) {
  let denStyle = function (feature) {
  let countyRa = feature.properties.CountyNM
    return {
      fillColor: 'none',
      weight: 2,
      opacity: 1,
      color: 'orange',
      fillOpacity: 0.7
    }
  }
  let onEachFeature = function (feature, layer) {
    let countyRa = feature.properties.COUNTYNM
    layer.bindPopup('County location is ' + countyRa)
    countyLayer.addLayer(layer)
  }
  let SCCountyGeoJSON = {
    style: denStyle,
    onEachFeature: onEachFeature
  }
L.geoJSON(data, SCCountyGeoJSON).addTo(SC_Hospitals)
})
let SCHospitalLayer = 'https://cmcanan.github.io/Final2/SC_Hospitals_Point_data.geojson'
jQuery.getJSON(SCHospitalLayer, function (data) {
  let pointStyle = function (feature) {
    let hospitalName = feature.properties.Hospital
    let hospitalSize = feature.properties.Beds
  }
  let onEachFeature = function (feature, layer) {
    let hospitalName = feature.properties.Hospital
    let hospitalSize = feature.properties.Beds
    layer.bindPopup('Size of ' + hospitalName + ' = ' + hospitalSize + ' beds')
    pointLayer.addLayer(layer)
  }
  let SCHospitalGeoJSON = {
    style: pointStyle,
    onEachFeature: onEachFeature
  }
L.geoJSON(data, SCHospitalGeoJSON).addTo(SC_Hospitals)
})
let SCHospitalDensity = 'https://cmcanan.github.io/Final2/SC_Hospitals_Point_data_Density.geojson'
jQuery.getJSON(SCHospitalDensity,function (data) {
  let denStyle = function (feature) {
    let densityAMT = feature.properties.CLASS
  }
  let onEachFeature = function (feature, layer) {
    let densityAMT = feature.properties.CLASS
    layer.bindPopup('denisty rate is' + densityAMT)
    densityLayer.addLayer(layer)
  }
  let SCHospDenGeoJSON = {
    style: denStyle,
    onEachFeature: onEachFeature
  }
L.geoJSON(data, SCHospDenGeoJSON).addTo(SC_Hospitals)
})
let layers = {
  'County location': countyLayer,
  'hospital location': pointLayer,
  'denistyAMT': densityLayer
}
L.control.layers(basemaps, layers).addTo(SC_Hospitals)
