app.component('skillbar', {
    props: [
        'skill'
    ],
    methods: {
    },
    computed: {
        label: function() {
            return format(this.skill.experience) + "/" + format(this.skill.tnl);
        },
        barWidth: function() {
            return (this.skill.experience.div(this.skill.tnl).mul(100) + "%");
        },
        level: function() {
            return this.skill.level.toString()
        }
    },
    template: `
        <div class="col offset-1">
            <div class="row">{{skill.name}} - Level {{level}}</div>
            <div class="row progress">
                <div class="progress-bar" v-bind:style="{ width: barWidth }">
                    <span>
                    {{ label }} 
                    </span>
                </div>
            </div>
        </div>
        `
})