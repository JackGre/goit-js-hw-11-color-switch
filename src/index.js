import '../src/style.css';


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
console.log(body);
const startChangeColors = document.querySelector('[data-action=start]');
console.log(startChangeColors);
const stopChangeColors = document.querySelector('[data-action=stop]');
console.log(stopChangeColors);

const CLICK_START = 1000;
let changeBodyColors = null;


startChangeColors.addEventListener('click', randomColors);

function randomColors() {

    changeBodyColors = setInterval(() => {
        console.log(body.style.background = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`);}, CLICK_START);
    startChangeColors.disabled = true;    
};
stopChangeColors.addEventListener('click', stopRandomChangeColors);

function stopRandomChangeColors() {
    startChangeColors.disabled = false;
    clearInterval(changeBodyColors);
};
