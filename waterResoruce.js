class waterResoruce {
    constructor(waterResorucename, baseCps, baseCost, buttonId) {
        this.waterResorucename = waterResorucename;
        this.baseCps = baseCps / (1000 / tickRate);
        this.baseCost = baseCps;
        this.cost = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visible = false; // !!!!Change this to false!!!!!!
    }

    purchase() {
        score -= this.cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.cost * 1.15 ** this.amountOwned);
    }
    
    buttonState() {
        if (!this.visible){
            document.getElementById(this.buttonId).style.display = 'none';
            if (score >= this.baseCost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display = 'initial';
            }
        }
    
    if(score < this.cost) {
            document.getElementById(this.buttonId).disable = true;
        } else {
            document.getElementById(this.buttonId).disable = false;
        }

        document.getElementById(this.buttonId).innerHTML =
        "buy " +
        this.waterResorucename +
        " (cost: $" +
        Math.ceil(this.cost).toLocaleString() +
        ") <br> Adds $" +
        (this.baseCps * (1000 / tickRate)).toLocaleString() +
        " Per secound <br> [Owned: " +
        this.amountOwned +
        "]";
    }
}

    
       