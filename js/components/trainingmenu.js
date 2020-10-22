app.component('trainingmenu', {
    computed: {
        cultivationLabel: function() {
            return (+player.cultivation.percent);
        },
        basicLabel: function() {
            return (+player.body.percent) + (+player.mind.percent) + (+player.soul.percent);
        },
        skillLabel: function() {
            return "";
        }
    },
    template: `
        <div class="col">
            <div>
                <a>Cultivation ({{cultivationLabel}}%)</a>
                <hr style='margin-top:0em' >
                <trainingbar name='Meditation' v-model:value=player.cultivation.percent></trainingbar>
            </div>
            <div>
                <a>Basic ({{basicLabel}}%)</a>
                <hr style='margin-top:0em' >
                <trainingbar name='Body' v-model:value=player.body.percent></trainingbar>
                <trainingbar name='Mind' v-model:value=player.mind.percent></trainingbar>
                <trainingbar name='Soul' v-model:value=player.soul.percent></trainingbar>
            </div>
            <div v-if='player.skills.length > 0'>
                <a>Skill ({{skillLabel}}%)</a>
                <hr>
                Meditation
            </div>
        </div>
    `
})
