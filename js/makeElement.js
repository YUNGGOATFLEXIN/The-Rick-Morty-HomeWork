const makeElement = (tagName, className) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

export { makeElement };