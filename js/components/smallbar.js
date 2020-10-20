app.component('smallbar', {
    props: [
        'bartype'
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
        }
    },
    template:
        `<div class="small bars-container">
            <h3>{{bartype.name}}</h3>
            <div class="progress statProgress">
                <div class="progress-bar" v-bind:style="{ width: barWidth(bartype) }">
                    <span>
                        {{ format(bartype.current) }} / {{ format(bartype.max) }} 
                    </span>
                </div>
            </div>
        </div>`
})