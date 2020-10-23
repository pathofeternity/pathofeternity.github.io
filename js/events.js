class baseevent {
    constructor (name, steps) {
        this.name = name;
        this.steps = steps;
        this.currentStep = {};
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
                finishAction: function () {
                    breakthrough(5);
                }
            }
        ]
        super("A Mysterious Phenomenon", steps);
    }

}
