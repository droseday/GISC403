
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-41.272, 173.299], 6);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1okfc4000a01ra3iil61gz/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-37.008, 174.786]).addTo(map)
	.bindPopup('Auckland International Airport - AKL');

const marker2 = L.marker([-41.328, 174.808]).addTo(map)
	.bindPopup('Wellington International Airport - WLG');

const marker3 = L.marker([-43.486, 172.536]).addTo(map)
	.bindPopup('Christchurch International Airport - CHC');

const marker4 = L.marker([-45.021, 168.739]).addTo(map)
	.bindPopup('Queenstown International Airport - ZQN').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'purple',
		fillOpacity: 0.7,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-45.919, 170.203],
		[-45.935, 170.182],
		[-45.936, 170.185],
		[-45.924, 170.210],
		[-45.922, 170.210]
	],{
		color: 'yellow',
		fillColor: '#ffff66',
	}).addTo(map).bindPopup('Dunedin Airport - DUD. Offered international flights prior to the COVID-19 pandemic.');






// END OF DOCUMENT
setTimeout(ReOrder, 1000);
	function ReOrder() {
		geojsonLayer.bringToBack();
		polygon.bringToFront();
}
