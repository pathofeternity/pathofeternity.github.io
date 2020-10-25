app.component('mainbar', {
    props: [
        'bartype',
        'level'
    ],
    methods: {
        startBreakthrough: function(level) {
            startBreakthrough(level)
        }
    },
    computed: {
        breakthrough: function() {
            return this.bartype.current.gte(this.bartype.max)
        },
        label: function() {
                return format(this.bartype.current,2) + "/" + format(this.bartype.max,2) + (this.bartype.increase.neq(0) ? " (" + format(this.bartype.increase,2) + "/s)" : "");
        },
        barWidth: function() {
            return (this.bartype.current.div(this.bartype.max).mul(100) + "%");
        },
        levelName: function() {
            return levelName(this.level);
        },
    },
    template: `
        <div class="bars-container">
            <h2> Cultivation - {{ levelName }}</h2>
            <div class="progress statProgress">
                <div class="progress-bar" v-bind:style="{ width: barWidth }">
                    <span>
                        <button @click=startBreakthrough(this.level) class='btn btn-success' v-if=breakthrough>Breakthrough</button>
                        <template v-else>{{ label }}</template>
                    </span>
                </div>
            </div>
        </div>
        `
})