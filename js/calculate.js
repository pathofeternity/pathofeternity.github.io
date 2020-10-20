function resourceGain(that, ticks) {
    that.player.cultivation.current = that.player.cultivation.current.add(that.player.cultivation.increase.mul(ticks));
    if (that.player.cultivation.current.gte(that.player.cultivation.max)) {
        that.player.cultivation.current = that.player.cultivation.max;
    }
    //updateHTML();

}