const button = document.getElementById('button');
const wrapper = document.getElementById('wrapper');

button.addEventListener('click', generateGrid);

function generateGrid() {
    let grid = document.createElement('div');
    grid.className = 'grid-container';

    for (let i = 0; i < 100; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        grid.appendChild(box);
    }

    wrapper.appendChild(grid);
    return grid;
}
