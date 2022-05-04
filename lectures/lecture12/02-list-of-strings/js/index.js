const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];


// use a for / of loop to loop through each element
// of the names array and output a message to the screen:
const el = document.querySelector('#output');
el.innerHTML += `<p>Welcome, ${names[0]}!</p>`;
el.innerHTML += `<p>Welcome, ${names[1]}!</p>`;
el.innerHTML += `<p>Welcome, ${names[2]}!</p>`;
el.innerHTML += `<p>Welcome, ${names[3]}!</p>`;

//item is a variable which will hold each element of the array names until it goes 
//through each item of the array
for (const item of names) {
    el.innerHTML += `<p>Welcome, ${names[item]}!</p>`
}