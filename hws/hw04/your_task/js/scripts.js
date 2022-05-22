//simplifies using APIs (created by Sarah; do not spam this)
const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
const artistBaseURLUnsimplified = "https://www.apitutor.org/spotify/v1/";
const albumBaseURLUnsimplified = "https://www.apitutor.org/spotify/v1/albums/";

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

const getTracksHTML = (track) => {
    //take in tracks array, so need to cycle through for each track to render image
    
    console.log(track);
    
    //if track image does not exist, put this blank image instead
    if (!track.image_url) {
        track.image_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }

    //EXTRA CREDIT #3 --> why isn't this working??
    // if (!track.preview_url) {
    // console.log("remove image");
    // //no audio preview availible if no preview URL --> why isn't this working?
    // document.querySelector(".fas play-track fa-play").style.visibility = hidden;

    // };


    //added onclick event handler here to tracks 
    return `<button class="track-item preview" aria-label="Preview ${track.name}"
        onclick="handleTrackClick(event);"
        data-preview-track="${track.preview_url}">
        <img src="${track.album.image_url}" alt = "Photo of ${track.name} Album">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h2>${track.name}</h2>
            <p>
            ${track.artist.name}
            </p>
        </div>
    </button>`
    
};

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);

    //clear the tracks container before fetch
    document.querySelector("#tracks").innerHTML ="";

     //query Spotify via fetch and using baseURL from above and adding search term
    //could also have used template: `${baseURL}?type=artist&q=${term}`
    //this code fetches tracks based on a search term and prints them to the console:
    fetch (baseURL + "?type=track&q=" + term)
    //takes response and converts into json object which we can work with
     .then(response =>  response.json())
     .then (tracks => {

        //data holds list of 20 tracks
         console.log(tracks);

         let firstTracks = [];

         //can limit number of tracks returned here by looping as done here
         //or can put limit into fetch URL
         if (tracks.length>=5) {
             //pick the first artist that you go across (similar to other parts of 
             //homework where you might just need to use the loop)
             firstTracks = [tracks[0],tracks[1], tracks[2], tracks[3], tracks[4]];
             //set innerHTML to the getArtistHTML function output with putting in
             //firstArtist as input
             console.log(firstTracks);
             //or could have used classic for loop with i<5 and tracks[i]
             for (const track of firstTracks) {
                 //need to do += so adds on top of each other
                document.querySelector("#tracks").innerHTML += getTracksHTML(track);
             };
         } else if (tracks.length>0 && tracks.length<=4) {
             //fill firstTracks array with data information 
             let i =0;
             //could have also likely simplified this by just using a classic for loop
             for (const track of tracks) {
                firstTracks[i] = tracks[i];
                i++;
             }
             for (const track of firstTracks) {
                //need to do += so adds on top of each other
               document.querySelector("#tracks").innerHTML += getTracksHTML(track);
            };
         }
         //this code handles the case where no tracks are found
         else  {
            document.querySelector("#tracks").innerHTML = `<p>No tracks found for ${term}.</p>`;
         }
     });
};

const getAlbumsHTML = (album) => {
    //take in tracks array, so need to cycle through for each track to render image
    //why is this not cyclying through all the albums?? why only once? 
    
         //if track image does not exist, put this blank image instead
        if (!album.image_url) {
            album.image_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        }

        console.log("album 1");

        return `<section class="album-card" data-id="${album.id}" 
        onclick="handleAlbumClick(event);">
        <div>
            <img src="${album.image_url}" alt = "Photo of ${album.name} Album">
            <h2>${album.name}</h2>
            <div class="footer">
                <a href="${album.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`
   
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
    
    document.querySelector("#albums").innerHTML = "";

    fetch (baseURL + "?type=album&q=" + term)
    //takes response and converts into json object which we can work with
     .then(response =>  response.json())
     .then ((data) => {
         console.log(data);

         //make sure at least one response
         if (data.length>0) {
             //fill album array with data information 
             let albums = [];
             //how to get this to not cycle for 
             for (let i = 0; i < data.length; i++) {
                albums[i] = data[i];
                document.querySelector("#albums").innerHTML += getAlbumsHTML(albums[i]);
             };
             
         }
         else {
            document.querySelector("#albums").innerHTML =`<p>No albums found for ${term}.</p>`;
         }
     });
};

//getArtist helper function to insert first artist into the template
const getArtistHTML = (artist) => {
    //if artist image does not exist
    if (!artist.image_url) {
        artist.image_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }

    //return image card, but make it based on what the user puts in the search
    return `<section class="artist-card" data-id="${artist.id}" onclick="handleArtistClick(event);">
    <div>
        <img src="${artist.image_url}" alt = "Photo of ${artist.name} Album">
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
            document.querySelector("#artist").innerHTML =`<p>No artists found for ${term}.</p>`;
         }
     });
};


const handleTrackClick = (ev) => {

    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);

    audioPlayer.setAudioFile(previewUrl);

    audioPlayer.play();

    document.querySelector("footer .track-item").innerHTML = ev.currentTarget.innerHTML;

    
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



//EXTRA CREDIT Part 1: Clik on artist and get top tracks
const handleArtistClick = (ev) => {
    //look at how to do this in HW #3
    const artistID = ev.currentTarget.getAttribute('data-id');

    console.log("artist id " + artistID);

    document.querySelector("#tracks").innerHTML ="";

    //why is this not fetching? even with the hard code?
    fetch (artistBaseURLUnsimplified + "artists/" + artistID  + "/top-tracks?country=us")
    //fetch ("https://www.apitutor.org/spotify/v1/artists/0LcJLqbBmaGUft1e9Mm8HV/top-tracks?country=us")
    //takes response and converts into json object which we can work with
     .then(response =>  response.json())
     .then (obj => {

        //need to access array of obj
        let tracks = obj.tracks;


        //can limit number of tracks returned here by looping as done here
        //or can put limit into fetch URL
        if (tracks.length>=5) {
            //pick the first artist that you go across (similar to other parts of 
            //homework where you might just need to use the loop)
            firstTracks = [tracks[0],tracks[1], tracks[2], tracks[3], tracks[4]];
            //set innerHTML to the getArtistHTML function output with putting in
            //firstArtist as input
            console.log(firstTracks);
            //or could have used classic for loop with i<5 and tracks[i]
            for (const track of firstTracks) {
                //need to do += so adds on top of each other
               document.querySelector("#tracks").innerHTML += getTracksHTMLforArtistClick(track);
            };
        } else if (tracks.length>0 && tracks.length<=4) {
            //fill firstTracks array with data information 
            let i =0;
            //could have also likely simplified this by just using a classic for loop
            for (const track of tracks) {
               firstTracks[i] = tracks[i];
               i++;
            }
            for (const track of firstTracks) {
               //need to do += so adds on top of each other
              document.querySelector("#tracks").innerHTML += getTracksHTMLforArtistClick(track);
           };
        }
        //this code handles the case where no tracks are found
        else  {
           document.querySelector("#tracks").innerHTML = `<p>No tracks found.</p>`;
        };
     });
    
};


const getTracksHTMLforArtistClick = (track) => {
    //take in tracks array, so need to cycle through for each track to render image
    
    console.log(track);
        //if track image does not exist, put this blank image instead
    if (!track.image_url) {
        track.image_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }

    
    //add artists' names together (did this with Pun and https://stackoverflow.com/questions/64809405/concat-object-values-from-key-with-comma)
    const ret = track.artists.map((x) => x.name).join(', ');
    console.log(ret);

    //added onclick event handler here to tracks 
    return `<button class="track-item preview" aria-label="Preview ${track.name}"
        onclick="handleTrackClick(event);"
        data-preview-track="${track.preview_url}">
        <img src="${track.album.images[0].url}" alt = "Photo of ${track.name} Album">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h2>${track.name}</h2>
            <p>
            ${ret}
            </p>
        </div>
    </button>`
    
};

//EXTRA CREDIT Part 2: Clik on album and get top tracks
const handleAlbumClick = (ev) => {

    //look at how to do this in HW #3
    const albumID = ev.currentTarget.getAttribute('data-id');

    console.log(albumID);

    document.querySelector("#tracks").innerHTML ="";

    fetch (albumBaseURLUnsimplified+albumID+"/tracks")
    //takes response and converts into json object which we can work with
     .then(response =>  response.json())
     .then (obj => {
         console.log("albums: "+ obj);
         console.log("albums: "+ obj.items);

         //access tracks from object
         let tracks = obj.items;
         console.log(tracks[0]);

         let firstTracks = [];

         //can limit number of tracks returned here by looping as done here
         //or can put limit into fetch URL
         if (tracks.length>=5) {
             //pick the first artist that you go across (similar to other parts of 
             //homework where you might just need to use the loop)
             firstTracks = [tracks[0],tracks[1], tracks[2], tracks[3], tracks[4]];
             //set innerHTML to the getArtistHTML function output with putting in
             //firstArtist as input
             console.log(firstTracks);
             //or could have used classic for loop with i<5 and tracks[i]
             for (const track of firstTracks) {
                 //need to do += so adds on top of each other
                document.querySelector("#tracks").innerHTML += getTracksHTMLforAlbumClick(track);
             };
         } else if (tracks.length>0 && tracks.length<=4) {
             //fill firstTracks array with data information 
             let i =0;
             //could have also likely simplified this by just using a classic for loop
             for (const track of tracks) {
                firstTracks[i] = tracks[i];
                i++;
             }
             for (const track of firstTracks) {
                //need to do += so adds on top of each other
               document.querySelector("#tracks").innerHTML += getTracksHTMLforAlbumClick(track);
            };
         }
         //this code handles the case where no tracks are found
         else  {
            document.querySelector("#tracks").innerHTML = `<p>No tracks found.</p>`;
         }
     });

};


const getTracksHTMLforAlbumClick = (track) => {
    //take in tracks array, so need to cycle through for each track to render image
    
    console.log(track);
        //if track image does not exist, put this blank image instead
    if (!track.image_url) {
        track.image_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }


    //add artists' names together (did this with Pun and https://stackoverflow.com/questions/64809405/concat-object-values-from-key-with-comma)
    const ret = track.artists.map((x) => x.name).join(', ');
    console.log(ret);

    //different naming convention for different API
    return `<button class="track-item preview" aria-label="Preview ${track.name}"
        onclick="handleTrackClick(event);"
        data-preview-track="${track.preview_url}">
        <img src="${track.image_url}" alt = "Photo of ${track.name} Album">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h2>${track.name}</h2>
            <p>
            ${ret}
            </p>
        </div>
    </button>`
    
};

