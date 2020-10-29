app.component('techniquespanel', {
    props: [
    ],
    methods: {
    },
    computed: {
        cultivationSkills: function() {
            return player.skills.filter(skill => skill.type == 'cultivation')
        }
    },
    template: `
        <div class="row"><div class="col">
            <div>
            <a>Cultivation Techniques</a>
                <hr style='margin-top:0em' >
                <skillbar v-for="skill in cultivationSkills" :skill='skill'></skillbar>
            </div>
        </div>
        <div class="col">
            >
        </div></div>
        `
})