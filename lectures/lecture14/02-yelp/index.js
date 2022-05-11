/**
 * Your Job:
 * 1. Display all of the matching restaurants to the screen (any way you want).
 * 2. Make the search honor the location.
 * 3. Make the search honor the cuisine chosen.
 */
const showMatchingRestaurants = ev => {
    // ev.preventDefault();
    //change so that takes what user types as location and cuisine search term
    const term = document.querySelector("#cuisine").value; 
    const location = document.querySelector("#location").value; 
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=$(location),%20IL&term=$(term)`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            //can then print data to screen, make a map, etc.
            for (const restaurant of data) {
                document.querySelector("#restuarants").innerHTML += `<p>${resturant.name}</p>`;
            }
        });
};


document.querySelector('#search').addEventListener('click', showMatchingRestaurants);