class baseevent {
    constructor (name, steps, start) {
        this.name = name;
        this.steps = steps;
        this.currentStep = start;
        this.complete = false;
        this.stepProgress = {};
        this.stepProgress.current = new Decimal("0");
        this.stepProgress.max = steps[start].stepHealth;
        this.stepProgress.increase = new Decimal("0");
        this.stepProgress.increaseTime = 0;
    };

    visible() {
        return false;
    }
}

class breakthroughE1 extends baseevent {
    constructor () {
        var steps = [
            {
                title: "Gather Specks",
                description: "Gathering Specks...",
                defaultAction: "Gather Specks",
                defaultDamage: new Decimal("1"),
                hasDefaultAction: true,
                stepHealth: new Decimal("1"),
                finishAction: function () {
                    breakthrough(5);
                    endEvent();
                },
                }
        ]
        super("A Mysterious Phenomenon", steps, 0);
    }

}