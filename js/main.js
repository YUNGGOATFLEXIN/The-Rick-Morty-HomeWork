const makeElement = (tagName, className) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}


// CHARACTERS
const characterList = document.getElementById('characterList');

const getCharacters = async () => {
    const character = await fetch('https://rickandmortyapi.com/api/character/');
    const { results } = await character.json();

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
}

getCharacters();

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#characterBtn').addEventListener('click', () => {
        document.querySelector('#characterList').classList.toggle('is-active')
    })
})


// LOCATIONS
const locationList = document.getElementById('locationList');

const getLocation = async () => {
    const location = await fetch ('https://rickandmortyapi.com/api/location');
    const { results } = await location.json();

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
}

getLocation();


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#locationBtn').addEventListener('click', () => {
        document.querySelector('#locationList').classList.toggle('is-active')
    })
})

// EPISODES
const episodeList = document.getElementById('episodeList');

const getEpisodes = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/episode');
    const { results } = await res.json();

    results.forEach( ({ name, air_date, episode }) => {
        const episodeArticle = makeElement('li', 'episodes__card');
        const episodeInfo = makeElement('div', 'episodes__info');
        const episodeTitle = makeElement('h2', 'episodes__name');
        const episodeDate = makeElement('p', 'episodes__date');
        const episodeNumber = makeElement('p', 'episodes__number');


        episodeTitle.textContent = `Name: ${name}`;
        episodeDate.textContent = `Date: ${air_date}`;
        episodeNumber.textContent = `Episode: ${episode}`;

        episodeInfo.appendChild(episodeTitle);
        episodeInfo.appendChild(episodeDate);
        episodeInfo.appendChild(episodeNumber);

        episodeArticle.appendChild(episodeInfo);

        episodeList.appendChild(episodeArticle);
    });
}

getEpisodes();


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#episodeBtn').addEventListener('click', () => {
        document.querySelector('#episodeList').classList.toggle('is-active')
    })
})