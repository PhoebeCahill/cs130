// hard code font size
let currentFontSize =1.4;

const makeBigger = () => {
   // alert('make bigger!');
   // can hard code original font value or can get current value and then modify that 
   //currentFontSize = currentFontSize + .2;
   //can shorthand the above as
   currentFontSize += .2;
   setFontSize();

};

const makeSmaller = () => {
   // alert('make smaller!');
   currentFontSize = currentFontSize - .2;

   //max out decreasing the font size
   if (currentFontSize<.5) {
      currentFontSize=.5;
   }
   setFontSize();
};

const setFontSize = () => {
   //select elements to change font size of 
   //currentFontSize into string by using `` and ${} to have fill in ourselves
   document.querySelector('.content').style.fontSize= `${currentFontSize}em`;
   document.querySelector('h1').style.fontSize= `${currentFontSize + .5}em`;
}


// call this on the larger A
document.querySelector('#a1').addEventListener('click', makeBigger);
// call this on the smaller a
document.querySelector('#a2').addEventListener('click', makeSmaller);
