//create master function to remove repetition
const arithmetic = (operand) => {
    
}

//when we click the + button, this will be printed to the screen
const addTheNumbers = () => {
    // Your code here...
    console.log('add the numbers...');

    //accesses whatever is entered into the input under the first number
    let num1 = document.querySelector("#num1").value;

    //accesses whatever is entered into the input under the second number
    let num2 = document.querySelector("#num2").value;

    // this just puts the numbers next to eachother because when pull info from DOM
    // by default, it will store the variables as string. so here need to convert to #
    // so that we can use the operator to add
    let result = Number(num1) + Number(num2);

    //print result in box
    document.querySelector("#answer").innerHTML = result;

}

const subtractTheNumbers = () => {
    // Your code here...
    console.log('subtract the numbers...');

    //same code as + but with -
    //can avoid repetition by creating master function 
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let result = Number(num1) - Number(num2);

    document.querySelector("#answer").innerHTML = result;
}


