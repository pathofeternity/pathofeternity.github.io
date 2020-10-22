function resourceGain(that, ticks) {
    that.player.cultivation.increase = new Decimal(0.01).mul(that.player.cultivation.percent);
    that.player.cultivation.current = that.player.cultivation.current.add(that.player.cultivation.increase.mul(ticks));
    if (that.player.cultivation.current.gte(that.player.cultivation.max)) {
        that.player.cultivation.current = that.player.cultivation.max;
    }
    //updateHTML();

}