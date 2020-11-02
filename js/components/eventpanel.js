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
        },
        useSkill: function (skill) {
            if ('useSkill' in this.currentStep) {
                this.currentStep.useSkill(skill);
            } else {
                if (skill == "generic") {
                    player.currentEvent.stepProgress.increase = this.currentStep.defaultDamage;
                    player.currentEvent.stepProgress.increaseTime = 2;
                } else {
                    player.currentEvent.stepProgress.increase = skill.damage;
                    player.currentEvent.stepProgress.increaseTime = 2;
                }
            }
        }
    },
    computed: {
        currentStep: function () {
            return player.currentEvent.steps[player.currentEvent.currentStep];
        },
        validActions: function () {
            if ('validAction' in this.currentStep) {
                validSkills = [];
                for (skill in player.skills) {
                    if (this.currentStep.validAction(player.skills[skill]))
                        validSkills.push(player.skills[skill]);
                }
                return validSkills;
            } else {
                return [];
            }
        },
        label: function() {
            return format(player.currentEvent.stepProgress.current) + "/" + format(player.currentEvent.stepProgress.max);
        },
        barWidth: function() {
            return (player.currentEvent.stepProgress.current.div(player.currentEvent.stepProgress.max).mul(100) + "%");
        },
    },
    template: `
        <div className="event-panel">
            <div className="event-top">
                <h2>{{player.currentEvent.name}}</h2>
                <div class="btn-group event-buttonbar">
                    <button type="button" v-for="step in player.currentEvent.steps" v-bind:class="buttonStyle(step)">{{step.title}}</button>
                </div>
            </div>
            <div class="row">
                <div class="col-4 btn-group-vertical event-usable-skills">
                    <button type="button" v-if=currentStep.hasDefaultAction @click='useSkill("generic")' class="btn btn-primary mb-2">{{currentStep.defaultAction}}</button>
                    <button type="button" v-for="skill in validActions" @click=useSkill(skill) class="btn btn-primary mb-2">{{skill.name}}</button>
                    <button type="button" @click=exitEvent() class="btn btn-primary">Cancel</button>
                </div>
                <div class="col mr-3">
                    <h3 class="text-center">{{currentStep.description}}</h3>
                    <div class="progress statProgress">
                        <div class="progress-bar" v-bind:style="{ width: barWidth }">
                            <span>
                                {{ label }} 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    `
})