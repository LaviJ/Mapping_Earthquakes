//Module 13.2.4 Create a Simple Map

// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,    
    accessToken: API_KEY

});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//changing the mapbox style
// mapbox://styles/mapbox/streets-v11

//Module 13.4.1 Map a Single Point
//Add a Marker to the Map
//the latitude and longitude for Los Angeles, California, for adding a marker
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//Add a Circle to the Map
L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffal',
    // fillOpacity: 0.2,
    radius: 300    
 }).addTo(map);

