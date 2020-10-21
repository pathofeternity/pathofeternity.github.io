app.component('mainbar', {
    props: [
        'bartype',
        'level'
    ],
    data: function() {
        return {}
    },
    methods: {
        format(amount) {
          return format(amount)
        },
        barWidth(number) {
            return (number.current.div(number.max).mul(100) + "%");
        },
        levelName(number) {
            return levelName(number);
        },
    },
    template:
        `<div class="bars-container">
            <h2> {{ levelName(level) }}</h2>
            <div class="progress statProgress">
                <div class="progress-bar" v-bind:style="{ width: barWidth(bartype) }">
                    <span>
                        {{ format(bartype.current) }} / {{ format(bartype.max) }}
                    </span>
                </div>
            </div>
        </div>`
})