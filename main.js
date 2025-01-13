const tickRate = 1000 / 30;
let score = 0;

let water = new waterResoruce('Water', 0.1, 15, 'buyWater');
// let river = new waterResoruce('Lakes', 1, 100, 'buyLakes');
// let lakes = new waterResoruce('Lakes', 1, 100, 'buyLakes');
// let ocean = new waterResoruce('Lakes', 1, 100, 'buyLakes');
function incScore() {
    score += water.cps;
}

function scorePlusPlus() {
    score++;
    document.getElementById('score').innerHTML = score;
}

function updatebuttons(){
    water.buttonState
}

function updatePage() {
    incScore();
    updatebuttons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
