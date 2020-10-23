app.component('eventpanel', {
    data() { return {
      eventtext: "Sample event text goes here",
      buttontexts: ["Button 1", "Button 2"],
      choice: "None"
    }},
    props: [
        'bartype',
        'level'
    ],
    computed: {
    },
    template: `<div>{{eventtext}}</div>
    <div>{{choice}}</div>
    <span v-for="text in buttontexts">
      <button v-on:click="choice=text">{{text}}</button>
    </span>`
})
