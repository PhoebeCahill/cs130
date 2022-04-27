// make function to reset functions back to white
const resetButtonBackgrounds = () => {
    document.querySelector('btn1').style.backgroundColor = color;
    document.querySelector('btn2').style.backgroundColor = color;
    document.querySelector('btn3').style.backgroundColor = color;
    document.querySelector('btn4').style.backgroundColor = color;

    // this does not work becuase .style.backgroundColor only works when 
    // applied to individual element
    //document.querySelectorAll(buton).style.backgroundColor = color;

    //instead could do a loop with this list of elements to go through each
    document.querySelectorAll('button').forEach(btn => btn.style.backgroundColor = color);

};


const makeRed = () => {
    // reset all background of button
    resetButtonBackgrounds();
    // your code here...
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = 'red';
    // finds the first instance of button
    document.querySelector('button').style.backgroundColor = 'red';

    // can use built in color or own colors
};

const makeBlue = () => {
    resetButtonBackgrounds();
    // your code here...
    console.log('Change background to blue');
    document.querySelector('body').style.backgroundColor = 'blue';
    // call id number of secnod button, so need to add a hashtag
    document.querySelector('#btn2').style.backgroundColor = 'blue';
    document.querySelector('#btn2').style.fontSize = '20px';

};

const makePink = () => {
    resetButtonBackgrounds();
    // your code here...
    console.log('Change background to pink');
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('#btn3').style.backgroundColor = 'pink';


};

const makeOrange = () => {
    resetButtonBackgrounds();

    // your code here...
    console.log('Change background to orange');
    document.querySelector('body').style.backgroundColor = 'orange';
    document.querySelector('#btn4').style.backgroundColor = 'orange';

};

