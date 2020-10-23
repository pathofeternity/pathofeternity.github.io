app.component('eventpanel', {
    data() { return {
      stepIndex: 0 // I know this this is redundant with currentStep
      // but I don't know where we'll set it.
    }},
    props: [
    ],
    computed: {
      event: function() { return player.currentEvent },
      step: function() { return this.event.steps[this.stepIndex]},
    },
    template: `
    <div>{{step.title}}</div>
    <div>{{step.description}}</div>
    <button v-on:click="step.finishAction">{{step.defaultAction}}</button>
    `
})
