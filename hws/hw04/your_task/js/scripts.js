//simplifies using APIs (created by Sarah; do not spam this)
const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    //gets value of what is searched
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTermHTML = (track) => {

};

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);

     //query Spotify via fetch and using baseURL from above and adding search term
    //could also have used template: `${baseURL}?type=artist&q=${term}`
    fetch (baseURL + "?type=track&q=" + term)
    //takes response and converts into json object which we can work with
     .then(response =>  response.json())
     .then ((data) => {
         console.log(data);
         //make sure at least one response 
         if (data.length>0) {
             //pick the first artist that you go across (similar to other parts of 
             //homework where you might just need to use the loop)
             const firstTracks = [data[0],data[1], data[2], data[3], data[4]];
             //set innerHTML to the getArtistHTML function output with putting in
             //firstArtist as input
             //document.querySelector("#term").innerHTML = getTermHTML(firstTracks);


         } else {
            document.querySelector("#artist").innerHTML ="No tracks found.";
         }
     });
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
};

//getArtist helper function to insert first artist into the template
const getArtistHTML = (artist) => {
    //if artist image does not exist
    if (!artist.image_url) {
        artist.image_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }

    //return image card, but make it based on what the user puts in the search
    return `<section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
        

    //query Spotify via fetch and using baseURL from above and adding search term
    //could also have used template: `${baseURL}?type=artist&q=${term}`
     fetch (baseURL + "?type=artist&q=" + term)
    //takes response and converts into json object which we can work with
     .then(response =>  response.json())
     .then ((data) => {
         console.log(data);
         //make sure at least one response 
         if (data.length>0) {
             //pick the first artist that you go across (similar to other parts of 
             //homework where you might just need to use the loop)
             const firstArtist = data[0];
             //set innerHTML to the getArtistHTML function output with putting in
             //firstArtist as input
             document.querySelector("#artist").innerHTML = getArtistHTML(firstArtist);


         } else {
            document.querySelector("#artist").innerHTML ="No artist found.";
         }
     });
};

const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard, so onkeyup means when you 
    //release the enter key
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        //calls search function above
        search();
    }
};