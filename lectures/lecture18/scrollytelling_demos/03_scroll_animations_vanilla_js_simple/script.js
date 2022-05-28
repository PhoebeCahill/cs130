const scrollElements = document.querySelectorAll(".scroll-element");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

// listening for scroll
const handleScrollAnimation = () => {
    // checking if the element is in the view when it is scrolled
    scrollElements.forEach((el) => {
        // if it is in view, the scroll element is diplayed
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } 
        // if it is not in view, the scroll element is hidden
        else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", handleScrollAnimation);