const tickRate = 1000 / 30; // 30 FPS
let score = 0;

let water = new Building('Water', 0.3, 15,);
let pond = new Building('Pond', 1, 100,);
let river = new Building('River', 4.5, 250,);
let lake = new Building('Lake', 10, 400,);
let iceMelt = new Building('iceMelt', 10, 400,);

function scorePlusPlus() {
    score++;
}

function incScore() {
    score += water.cps;
    score += pond.cps;
    score += river.cps;
    score += lake.cps;
    score += iceMelt.cps;
}

function updateButtons() {
    water.buttonState();
    pond.buttonState();
    river.buttonState();
    lake.buttonState();
    iceMelt.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);