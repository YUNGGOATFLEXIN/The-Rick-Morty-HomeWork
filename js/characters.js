import { makeElement } from "./makeElement.js";


const characterList = document.getElementById('characterList');

const showCharacters = (results = []) => {
    results.forEach( ({ image, name, status, species, gender }) => {
        const article = makeElement('article', 'characters__card');
        const characterContent = makeElement('div', 'characters__content')
        const characherImage = makeElement('img', 'characters__img');
        const characterInfo = makeElement('div', 'characters__info');
        const title = makeElement('h2', 'characters__name');
        const characterStatus = makeElement('p', 'characters__status');
        const characterSpecies = makeElement('p', 'characters__species');
        const characterGender = makeElement('p', 'characters__gender');

        characherImage.src = image;
        title.textContent = name;
        characterStatus.textContent = `Status: ${status}`;
        characterSpecies.textContent = `Species: ${species}`;
        characterGender.textContent = `Gender: ${gender}`;

        characterInfo.appendChild(title);
        characterInfo.appendChild(characterStatus);
        characterInfo.appendChild(characterSpecies);
        characterInfo.appendChild(characterGender);

        characterContent.appendChild(characherImage);
        characterContent.appendChild(characterInfo);

        article.appendChild(characterContent);

        characterList.appendChild(article);
    });
};

export { showCharacters };