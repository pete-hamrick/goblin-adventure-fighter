// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinListEl = document.querySelector('.enemies-container');

// let state
let goblins = [{ hp: 0 }, { hp: 4 }, { hp: 3 }, { hp: 2 }, { hp: 1 }];

// set event listeners

// get user input
// use user input to update state
// update DOM to reflect the new state

function displayGoblins() {
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();
