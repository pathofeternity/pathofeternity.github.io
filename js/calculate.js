function resourceGain(ticks) {
    player.cultivation.increase = new Decimal(0.01).mul(player.cultivation.percent);
    player.cultivation.current = player.cultivation.current.add(player.cultivation.increase.mul(ticks));
    if (player.cultivation.current.gte(player.cultivation.max)) {
        player.cultivation.current = player.cultivation.max;
    }
    //updateHTML();

}