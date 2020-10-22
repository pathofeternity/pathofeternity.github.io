app.component('trainingbar', {
    props: [
        'name',
        'value'
    ],
    computed: {
        localValue: {
            get() {
                return this.value
            },
            set(newValue) {
                this.$emit('update:value', newValue)
            }
        }
    },
    watch: {
        localValue: function(newValue, oldValue) {
            var percent = 0;
            percent += +player.body.percent;
            percent += +player.mind.percent;
            percent += +player.soul.percent;
            if (percent > 100) {
                this.localValue = newValue-(percent-100);
            }
            player.cultivation.percent = 100-percent;
        }
    },
    template: `
        <div class="row">
            <div class="col-3">{{name}}</div>
            <div class="col"><input type="range" min="0" max="100" v-model='localValue'/></div>
            <div class="col justify-content-end">{{localValue}}%</div>
        </div>
    `
})