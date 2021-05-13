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
const i =0;


const changeColors = startChangeColors.addEventListener('click', clickTimeStart);
console.log(stopChangeColors);

//body.classList.add(changeColors)
//body.style.background = changeColors;
function clickTimeStart() {

    setTimeout(() => {
        body.style.background = colors;}, CLICK_START);
    
};

//stopChangeColors.addEventListener('click', () => {console.log('dddd')});
//console.log(stopChangeColors);
/**var i = 0; // итератор

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
} */