console.log("hello world");

const someHTML = `
    <section>
        <h1>hello ${name}!</h1>
    </section>
`;

document.querySelector("main").innerHTML = someHTML;