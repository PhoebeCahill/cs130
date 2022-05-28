//get data from yelp and then use that data?
url = "http://www.apitutor.org/yelp/simple/v3/businesses/search?location=Evanston, IL"


//initialize map:
// Mexico City coordinates are 19.451054, -99.125519, with zoom scale of 0-18
const mymap = L.map('mapid').setView([42.0451, 87.6877], 11);

//Options for different type maps
//initialize tiles (there are many options):
// L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);

// this is a nice map for historic
L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);

// L.tileLayer.provider('Stamen.Terrain').addTo(mymap);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);



// // CODE TO GENERATE LOTS OF FAKE MARKERS
// const generateRandomMarkers = (numCoords=100) => {
//     return new Array(numCoords).fill(null).map(
//         () => [ (Math.random() * 0.6 + 51), -1 * Math.random() + 0.4 ]
//     );
// };
// const coordinates = generateRandomMarkers(numCoords=50);
// console.log(coordinates);

// // create markers 
// for (coord of coordinates) {
//     const marker = L.marker(coord).addTo(mymap);
//     marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
// }



//see Sarah's answer code or go to OH
fetch (url) 
    .then(response => response.json())
    .then (restaurants => {
        console.log(restaurants)

        for (restaurant of restaurants) {
           console.log(restaurant.coordinates);
           const marker = L.marker(restaurant.coordinates.latitude, restaurant.coordinates.longitude).addTo(mymap);

           //looked up marker on-click event and how to add it 
           marker.on('click', (ev) => {
               console.log(ev);
           });
            // connect each object to a "popup" effect:
            marker.bindPopup(`<h3>${restaurant.name}</h3><p>${restaurant.display_address}</h3>`).openPopup();
 
        
        };
        //draw some additional markers here based on fetched info

    });


// // create circle:
// const circle = L.circle([51.5, -0.09], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// // create polygon:
// const polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);


// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// Class to dos: 