
// Module contains functions to create a new dom element(new task entry element on page)
// and to set the ID of that element with a random number
// (NOTE: if lots of enties, duplicats may occur)

function createHtmlElement(type, id, arrayClasses, content){
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses){
        arrayClasses.forEach((myclass) => element.classList.add(myclass));
    }
    if (content) element.innerText = content;

    return element;
}

function setId() {
    return Math.random().toString().split(".").join("");
}

export { createHtmlElement, setId };