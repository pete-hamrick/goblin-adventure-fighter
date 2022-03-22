// import functions and grab DOM elements
import { renderGoblin, renderPotions } from './render-utils.js';

const goblinListEl = document.querySelector('.enemies-container');
const characterEl = document.querySelector('.character');
const characterNameEl = document.querySelector('.character-name');
const characterHealthEl = document.querySelector('.character-health');
const potionsEl = document.querySelector('.potions');
const potionButton = document.querySelector('#potion-button');

// let state
let user = {
    name: '',
    hp: 10,
    potions: 2,
    keys: 0,
};
let goblins = [{ hp: 0 }, { hp: 4 }, { hp: 3 }, { hp: 2 }, { hp: 1 }];

// set event listeners

// get user input
// use user input to update state
// update DOM to reflect the new state

function displayUser() {
    characterNameEl.textContent = user.name;
    characterHealthEl.textContent = `HP: ${user.hp}`;
    const potions = renderPotions(user.potions);
    potionsEl.append(potions);

    if (user.hp >= 8) {
        characterEl.textContent = '😎';
    } else if (user.hp >= 6) {
        characterEl.textContent = '😅';
    } else if (user.hp >= 4) {
        characterEl.textContent = '😕';
    } else if (user.hp >= 2) {
        characterEl.textContent = '😵';
    } else if (user.hp === 1) {
        characterEl.textContent = '🤕';
    } else {
        characterEl.textContent = '☠';
    }
}

function displayGoblins() {
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();
displayUser();
