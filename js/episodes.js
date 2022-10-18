import { makeElement } from "./makeElement.js";


const episodeList = document.getElementById('episodeList');

const showEpisodes = (results = []) => {
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
};

export { showEpisodes };