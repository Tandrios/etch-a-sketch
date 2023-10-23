//Darker version
const DOCUMENTWIDTH = 600;
const TRANSITIONTIME = 5000

document.addEventListener('DOMContentLoaded' , () => {
    btn = document.querySelector('button').addEventListener('click', () => {
        let gridsize = prompt("What is the width of the grid? (max 100)");
        if (gridsize > 100) {
            gridsize = 100;
        }
        createGrid(gridsize)
    })

    createGrid(30);
    
})

function createGrid(gridsize) {
    const grid = document.querySelector('.grid-container');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    for (let i = 0; i < (gridsize * gridsize); i++) {
        createGridbox(gridsize);
    }
}

function createColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    const rgb = `rgb(${r},${g},${b})`;

    return rgb
}

function darkenColor(color) {
    let newColor = parseInt(color * 0.8);
    if (newColor > 255) {
        return 255
    }
    return newColor
}

function createGridbox(gridsize) {
    const container = document.querySelector('.grid-container')
    const div = document.createElement('div')

    div.style.cssText = `width: ${DOCUMENTWIDTH / gridsize}px; height: ${DOCUMENTWIDTH / gridsize}px`
    div.classList = 'grid';

    div.addEventListener('mouseenter', (e) => {
        if (div.classList.contains("grid-mouseLeave")) {
            div.classList.remove("grid-mouseLeave")
        }
        if (div.classList.contains("")) {
            div.classList.remove("grid-mouseLeave")
        }
        div.style.background = createColor();
    });

    div.addEventListener('mouseleave', (e) => {
        div.style.removeProperty("background");
        div.classList.add("grid-mouseLeave");
    });
    
    container.appendChild(div)

}

