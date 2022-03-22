export function renderGoblin(goblin) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const healthEl = document.createElement('p');

    goblinEl.classList.add('enemy');

    if (goblin.hp >= 3) {
        faceEl.textContent = '👹';
    } else if (goblin.hp === 2) {
        faceEl.textContent = '🥵';
    } else if (goblin.hp === 1) {
        faceEl.textContent = '🤬';
    } else {
        faceEl.textContent = '👻';
    }

    healthEl.textContent = `HP: ${goblin.hp}`;

    goblinEl.append(faceEl, healthEl);

    return goblinEl;
}
