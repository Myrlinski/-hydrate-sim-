const tickRate = 1000 / 30; // 30 FPS
let score = 0;

let water = new Building('Water', 0.1, 15, 'buyWater');
let pond = new Building('Pond', 1, 100, 'buyPond');
let river = new Building('River', 4.5, 250, 'buyRiver');
let lake = new Building('Lake', 10, 400, 'buyLake');

function scorePlusPlus() {
    score++;
}

function incScore() {
    score += water.cps;
    score += pond.cps;
    score += river.cps;
    score += lake.cps;
}

function updateButtons() {
    water.buttonState();
    pond.buttonState();
    river.buttonState();
    lake.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);