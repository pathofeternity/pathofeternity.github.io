app.component('trainingmenu', {
    data () {
        return {
            cultivation: player.cultivation.percent,
            body: player.body.percent,
            mind: player.mind.percent,
            soul: player.soul.percent,
            skills: player.skills,
        }
    },    
    computed: {
        cultivationLabel: function() {
            return (+this.cultivation);
        },
        basicLabel: function() {
            return (+this.body) + (+this.mind) + (+this.soul);
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
                <div class="row">
                    <div class="col-3">Meditation</div>
                    <div class="col"><input type="range" min="0" max="100" v-model='cultivation'/></div>
                    <div class="col justify-content-end">{{cultivation}}%</div>
                </div>
                <trainingbar name='Meditation' v-model:value=cultivation></trainingbar>
            </div>
            <div>
                <a>Basic ({{basicLabel}}%)</a>
                <hr style='margin-top:0em' >
                <trainingbar name='Body' v-model:value=body></trainingbar>
                <trainingbar name='Mind' v-model:value=mind></trainingbar>
                <trainingbar name='Soul' v-model:value=soul></trainingbar>
            </div>
            <div v-if='skills.length > 0'>
                <a>Skill ({{skillLabel}}%)</a>
                <hr>
                Meditation
            </div>
        </div>
    `
})
