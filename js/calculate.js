function resourceGain(ticks) {
    player.cultivation.increase = new Decimal(0.1).mul(player.cultivation.percent);
    player.cultivation.current = player.cultivation.current.add(player.cultivation.increase.mul(ticks));
    if (player.cultivation.current.gte(player.cultivation.max)) {
        player.cultivation.current = player.cultivation.max;
        player.cultivation.increase = new Decimal(0);
    }

    if (player.inEvent) {
        player.currentEvent.stepProgress.current = player.currentEvent.stepProgress.current.add(player.currentEvent.stepProgress.increase.mul(ticks));
        if (!player.currentEvent.complete && player.currentEvent.stepProgress.current.gte(player.currentEvent.stepProgress.max)) {
            player.currentEvent.complete = true;
            player.currentEvent.stepProgress.current = player.currentEvent.stepProgress.max;
            player.currentEvent.stepProgress.increase = new Decimal(0);
            setTimeout(function(){ player.currentEvent.steps[player.currentEvent.currentStep].finishAction(); }, 1000);       
        }
        player.currentEvent.stepProgress.increaseTime -= ticks;
        if (player.currentEvent.stepProgress.increaseTime <= 0) {
            player.currentEvent.stepProgress.increase = new Decimal(0);
        }
    }

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