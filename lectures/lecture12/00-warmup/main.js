//HTML representation of shapes
// 


//Step 1: What event do we want to use to create these shapes:



//Step 2: Create an event handler to attach to the event 

const addShape = (ev) => {
    console.log("Add shape");
    //tells us exactly where we clicked in the svg. Origin at top right.
    console.log(ev.clientX, ev.clientY);

    //create variable equal to the color from the input object with id of color
    let color = document.querySelector("#color").value;

    //create variable equal to the size from the input object with id of size
    let size = document.querySelector("#size").value;

    //create variable equal to the size from the input object with id of size
    let shape = document.querySelector("#shape").value;
    
    if (shape=="circle") {
        //define the circle 
        const circle = 
        `<circle 
            cx="${ev.offsetX}" 
            cy="${ev.offsetY}" 
            r="${size}" 
            stroke="black" 
            stroke-width="3" 
            fill="${color}">
        </circle>`;

        //add the circle to the svg
        document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
    } else if (shape==="square") {
         //define the square
         const square = `<rect 
            x="${ev.offsetX}" 
            y="${ev.offsetY}"  
            width="${size}" 
            height="${size}" 
            stroke="black" stroke-width="3" fill="${color}"></rect>`

         //add the quare to the svg
         document.querySelector('svg').insertAdjacentHTML("beforeend", square);
    } else {
        const triangle = ' <polygon points="100,100 150,100 125,135" stroke="black" stroke-width="3" fill="teal"></polygon>';
        
        document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);
    }
    
    
};

/**
 * Your job: when the user clicks the svg element, 
 * draw the shape the corresponds with the controls 
 * in the left-hand panel.
 */