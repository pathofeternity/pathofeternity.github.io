class baseevent {
    constructor (name, steps, start) {
        this.name = name;
        this.steps = steps;
        this.currentStep = start;
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
                defaultAction: "Gather",
                hasDefaultAction: true,
                finishAction: function () {
                    breakthrough(5);
                }
            }
        ]
        super("A Mysterious Phenomenon", steps, 0);
    }

}