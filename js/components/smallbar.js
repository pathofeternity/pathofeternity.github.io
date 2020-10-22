app.component('smallbar', {
    props: [
        'bartype'
    ],
    computed: {
        label: function() {
            return format(this.bartype.current) + "/" + format(this.bartype.max) + (this.bartype.increase.neq(0) ? " (" + format(this.bartype.increase) + "/s)" : "");
        },
        barWidth: function() {
            return (this.bartype.current.div(this.bartype.max).mul(100) + "%");
        },
        levelName: function() {
            return levelName(this.level);
        },
    },
    template: `
        <div class="small bars-container">
            <h3>{{bartype.name}}</h3>
            <div class="progress statProgress">
                <div class="progress-bar" v-bind:style="{ width: barWidth }">
                    <span>
                        {{ label }} 
                    </span>
                </div>
            </div>
        </div>
        `
})