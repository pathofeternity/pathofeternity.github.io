app.component('smallbar', {
    props: [
        'bartype'
    ],
    computed: {
        label: function() {
            return format(this.bartype.current) + "/" + format(this.bartype.max) + (this.bartype.increase.neq(0) ? " (" + format(this.bartype.increase,2) + "/s)" : "");
        },
        barWidth: function() {
            return (this.bartype.current.div(this.bartype.max).mul(100) + "%");
        },
    },
    template: `
        <div class="col-4">
            <div class="panel-border">
                <h3>{{bartype.name}}</h3>
                <div class="progress stat-progress">
                    <div class="progress-bar" v-bind:style="{ width: barWidth }">
                        <span>
                            {{ label }} 
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `
})