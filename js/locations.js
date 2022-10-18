import { makeElement } from "./makeElement.js";


const locationList = document.getElementById('locationList');

const showLocation = (results = []) => {
    results.forEach( ({ name, type }) => {
        const locationArticle = makeElement('li', 'location__card');
        const locationInfo = makeElement('div', 'location__info');
        const locationTitle = makeElement('h2', 'location__name');
        const locationType = makeElement('p', 'location__type');


        locationTitle.textContent = `Name: ${name}`;
        locationType.textContent = `Type: ${type}`;

        locationInfo.appendChild(locationTitle);
        locationInfo.appendChild(locationType);

        locationArticle.appendChild(locationInfo);

        locationList.appendChild(locationArticle);
    });
};

export { showLocation };