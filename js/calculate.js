function resourceGain(ticks) {
    player.cultivation.increase = new Decimal(0.1).mul(player.cultivation.percent);
    player.cultivation.current = player.cultivation.current.add(player.cultivation.increase.mul(ticks));
    if (player.cultivation.current.gte(player.cultivation.max)) {
        player.cultivation.current = player.cultivation.max;
        player.cultivation.increase = new Decimal(0);
    }
    //updateHTML();

}

function calculateCultivationMax(level) {
    return new Decimal("10").pow(level+1);
}

function breakthrough(maxLevel) {
    if (player.level < maxLevel) {
        player.level++;
        player.cultivation.max = calculateCultivationMax(player.level);
    }
}