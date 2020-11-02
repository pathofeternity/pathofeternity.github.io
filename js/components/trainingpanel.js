app.component('trainingpanel', {
    computed: {
        cultivationLabel: function() {
            return (+player.cultivation.percent);
        },
        basicLabel: function() {
            return (+player.body.percent) + (+player.mind.percent) + (+player.soul.percent);
        },
        skillLabel: function() {
            var percent = 0;
            for(var skill in player.skills) {
                percent += +player.skills[skill].percent;
            }
            return percent;
        },
        visibleSkills: function() {
            return player.getAllSkills();            
        }
    },
    template: `
        <div class="col">
            <div>
                <a>Cultivation ({{cultivationLabel}}%)</a>
                <hr style='margin-top:0em' >
                <trainingbar name='Meditation' v-model:value=player.cultivation.percent></trainingbar>
            </div>
            <div v-if='player.level > 1'>
                <a>Basic ({{basicLabel}}%)</a>
                <hr style='margin-top:0em' >
                <trainingbar name='Body' v-model:value=player.body.percent></trainingbar>
                <trainingbar name='Mind' v-model:value=player.mind.percent v-if='player.level > 5'></trainingbar>
                <trainingbar name='Soul' v-model:value=player.soul.percent v-if='player.level > 25'></trainingbar>
            </div>
            <div v-if='visibleSkills.length > 0'>
                <a>Skill ({{skillLabel}}%)</a>
                <hr style='margin-top:0em' >
                <trainingbar v-for="skill in visibleSkills" v-bind:name='player.skills[skill].name' v-model:value=player.skills[skill].percent></trainingbar>
            </div>
        </div>
    `
})
