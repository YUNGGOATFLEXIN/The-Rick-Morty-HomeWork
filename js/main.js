// CHARACTERS

import { showCharacters } from "./characters.js";

const getCharacters = async () => {
    const character = await fetch('https://rickandmortyapi.com/api/character/');
    const { results } = await character.json();
    showCharacters(results)
}

getCharacters();

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#characterBtn').addEventListener('click', () => {
        document.querySelector('#characterList').classList.toggle('is-active')
    })
})


// LOCATIONS

import { showLocation } from "./locations.js";

const getLocation = async () => {
    const location = await fetch ('https://rickandmortyapi.com/api/location');
    const { results } = await location.json();
    showLocation(results);
}

getLocation();


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#locationBtn').addEventListener('click', () => {
        document.querySelector('#locationList').classList.toggle('is-active')
    })
})

// EPISODES

import { showEpisodes } from "./episodes.js";

const getEpisodes = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/episode');
    const { results } = await res.json();
    showEpisodes(results);
}

getEpisodes();


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#episodeBtn').addEventListener('click', () => {
        document.querySelector('#episodeList').classList.toggle('is-active')
    })
})