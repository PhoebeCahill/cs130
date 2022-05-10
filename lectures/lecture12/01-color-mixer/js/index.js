const redElement = document.querySelector("#red");
const yellowElement = document.querySelector("#yellow");
const blueElement = document.querySelector("#blue");

const updateColor = (ev) => {
    /*
    INSTRUCTIONS: Update this function as follows:
    If red is turned on, make the background red.
    If yellow is turned on, make the background yellow.
    If blue is turned on, make the background blue.
    If red and yellow are both turned on, make the background orange.
    If red and blue are turned on, make the background purple.
    If yellow and blue are turned on, make the background green.
    If everything is turned on, then make the background black.
    */
    if (yellowElement.value === 'on' && blueElement.value === 'on' && redElement.value === 'on') {
        document.body.style.backgroundColor = 'black';
    } 
    //add and conditions
    //debut via adding print statemnets so see what the computer is hitting --> 
    //order matters
    else if (redElement.value === 'on' && yellowElement.value === 'on') {
        document.body.style.backgroundColor = 'orange';
        console.log("orange");
    } else if (redElement.value === 'on' && blueElement.value === 'on') {
        document.body.style.backgroundColor = 'purple';
    } else if (yellowElement.value === 'on' && blueElement.value === 'on') {
        document.body.style.backgroundColor = 'green';
    } 
    else if (redElement.value === 'on') {
        document.body.style.backgroundColor = 'red';
        console.log("red");
    } else if (yellowElement.value === 'on') {
        document.body.style.backgroundColor = 'yellow';
        console.log("yellow");
    } else if (blueElement.value=== 'on'){
        document.body.style.backgroundColor = 'blue';
        console.log("blue");
    } else  {
        document.body.style.backgroundColor = 'white';
    }
    

};

// You can either attach event handlers dynamically (using JavaScript)...
redElement.onchange = updateColor;
yellowElement.onchange = updateColor;
blueElement.onchange = updateColor;
