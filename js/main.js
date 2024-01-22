const button = document.getElementById('button');
const wrapper = document.getElementById('wrapper');

button.addEventListener('click', generateGrid);



function generateGrid() {
    let grid = document.createElement('div');
    grid.className = 'grid-container';

    for (let i = 1; i < 101; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerText =i;
        box.addEventListener('click', clickedBox);
        grid.appendChild(box);
    }

    wrapper.appendChild(grid);
    return grid;
}


function clickedBox() {
    this.classList.toggle('clicked');
}