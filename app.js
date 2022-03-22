// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinListEl = document.querySelector('.enemies-container');

// let state
let goblin = {
    hp: 0,
};

// set event listeners

const goblinEl = renderGoblin(goblin);

goblinListEl.append(goblinEl);
// get user input
// use user input to update state
// update DOM to reflect the new state
