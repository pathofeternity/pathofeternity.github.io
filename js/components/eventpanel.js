app.component('eventpanel', {
    methods: {
        buttonStyle: function(step) {
            if (step.title == this.currentStep.title) {
                return "toolbar-button btn btn-primary"
            } else {
                return "toolbar-button btn"
            }
        },
        exitEvent: function() {
            endEvent();
        }
    },
    computed: {
        currentStep: function () {
            return player.currentEvent.steps[player.currentEvent.currentStep];
        }
    },
    template: `
        <div className="event-panel">
            <div className="event-top">
                <h2>{{player.currentEvent.name}}</h2>
                <div class="btn-group event-buttonbar">
                    <button type="button" v-for="step in player.currentEvent.steps" v-bind:class="buttonStyle(step)">{{step.title}}</button>
                </div>
            </div>
            <div class="btn-group-vertical event-usable-skills">
                <button type="button" v-if=currentStep.hasDefaultAction class="btn btn-primary">{{currentStep.defaultAction}}</button>
                <button type="button" v-for="skill in player.skills" class="btn btn-primary">{{skill.name}}</button>
                <button type="button" class="btn btn-primary" @click=exitEvent()>Cancel</button>
            </div>
        </div>            
    `
})