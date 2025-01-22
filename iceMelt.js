class IceMelt extends Upgrade {
    constructor(upgradeName, cost, building){
        super(upgradeName, cost);
        this.building = building;
    }


    purchase() {
        super.purchase();
        meltStrength++
        this.building.doubleUpgrade++;
        this.building.applyUpgrade();
    }
}    