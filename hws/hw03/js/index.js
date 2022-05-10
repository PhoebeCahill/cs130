/**
 * Phoebe Cahill
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

//fill class with images (because preview images is hard coded)
const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                onclick="handleThumbnailClick(event)"
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."
                ></button>
        </li>`;
    });
};

initScreen();

//PART 1

let currentIndex = 0;

//create event handler here:
const handleThumbnailClick = (ev) => {
    //figure out which element the user clicked on via using property of event object:
    const elem = ev.currentTarget;

     //update currentIndex so that it is always accurate
     currentIndex = parseInt(elem.dataset.index);
    
    //change background to the image clicked clicked
    
    //this is one way to change background, but I actually used the other way shown below
   // document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;

    const image = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;

}

/**
 * attach event handler to all images and have the background change when clicked
 * Can add this to HTML code as above or use this code here
 * 
 * const imageElem = document.querySelectorAll('.image');
 * for (const elem of imageElem) {
 * elem.onclick = handleThumbnailClick;
 * };
 * 
 */



//PART 2


//create event handler here:
const cycleRight = (ev) => {
    //console.log("switch right");

    //increase image index by 1 to get the index to the right (start at 0)
    //if get to the end, loop back to the beginning 
     if (currentIndex < images.length - 1) {
        currentIndex++; 
    } else if (currentIndex===images.length - 1) {
        currentIndex=0;
    }

    
    //want to set featured image background to next image background or back to start
    const image = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;

}

const cycleLeft = (ev) => {
    //loop in opposite direction 
    if (currentIndex >0) {
        currentIndex--; 
    } else if (currentIndex===0) {
        currentIndex=7;
    }

    const image = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;

}


//attach function to the buttons
document.querySelector('.next').onclick = cycleRight;
document.querySelector('.prev').onclick = cycleLeft;
document.querySelector('.featured_image').onclick = cycleRight;


