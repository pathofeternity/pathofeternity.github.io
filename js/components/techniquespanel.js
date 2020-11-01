app.component('techniquespanel', {
    props: [
    ],
    methods: {
        equipSkillDrop(ev) {
            player.equipSkill(ev.dataTransfer.getData("name"));
        }
    },
    computed: {
        cultivationSkills: function() {
            return player.getSkillCategory('cultivation');
        }
    },
    template: `
        <div class="row">
            <div class="col">
                <div>
                <a>Cultivation Techniques</a>
                    <hr style='margin-top:0em' >
                    <skillbar v-for="skill in cultivationSkills" :name='skill'></skillbar>
                </div>
            </div>
            <div class="col" @drop='equipSkillDrop($event)' @dragover.prevent @dragenter.prevent>
                <skillslots type="cultivation" name="Cultivation"></skillslots>
            </div>
        </div>
        `
})

