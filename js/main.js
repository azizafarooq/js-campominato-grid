const button = document.getElementById('button');
const wrapper = document.getElementById('wrapper');
const difficulty = 100;
const bombNumbers = generateBombNumbers(difficulty);
let score = 0;

button.addEventListener('click', generateGrid);



function generateGrid() {
    let grid = document.createElement('div');
    grid.className = 'grid-container';

    for (let i = 1; i < 101; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerText =i;
        box.setAttribute('data-value', i); 
        box.addEventListener('click', clickedBox);
        grid.appendChild(box);
    }

    const previousGrid = wrapper.querySelector('.grid-container');
    if (previousGrid){
        wrapper.removeChild(previousGrid);
    }

    wrapper.appendChild(grid);
    return grid;
}


function clickedBox() {
    this.classList.toggle('clicked');
}

function generateBombNumbers(max) {
    const bombNumbers = [];
    while (bombNumbers.length < 16) {
        const bombNumber = Math.floor(Math.random() * max) + 1;
        if (!bombNumbers.includes(bombNumber)) {
            bombNumbers.push(bombNumber);
        }
    }
    return bombNumbers;
}

console.log(bombNumbers);

function clickedBox(event) {
    const clickedValue = parseInt(event.target.getAttribute('data-value'));

    if (bombNumbers.includes(clickedValue)) {
        event.target.classList.add('bomb');
        endGame(false);
    } else {
        event.target.classList.add('clicked');
        score++;

        if (score === difficulty - 16) {
            endGame(true);
        }
    }
}

function endGame(isWinner) {
    const resultMessage = isWinner ? 'Hai vinto! Punteggio: ' + score : 'Hai perso! Punteggio: ' + score;
    alert(resultMessage);
}