//RGB Fade out version

const GRIDSIZE = 50;
const DOCUMENTWIDTH = 600;
const DIVSIZE = DOCUMENTWIDTH / GRIDSIZE;
const TRANSITIONTIME = 5000

function createColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    const rgb = `rgb(${r},${g},${b})`;

    return rgb
}

function createGridbox() {
    const container = document.querySelector('.grid-container')
    const div = document.createElement('div')

    div.style.cssText = `width: ${DIVSIZE}px; height: ${DIVSIZE}px`
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

document.addEventListener('DOMContentLoaded' , () => {
    for (let i = 0; i < (GRIDSIZE * GRIDSIZE); i++) {
        createGridbox();
    } 
})