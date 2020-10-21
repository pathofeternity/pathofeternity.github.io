const intervalHold = [];
const interval = new Proxy(setInterval, {
    apply(target, thisArg, args) {
        const set = target.apply(thisArg, args);
        intervalHold.push(set);
        return set;
    }
});

const clearInt = new Proxy(clearInterval, {
    apply(target, thisArg, args) {
        const id = args[0];
        intervalHold.splice(intervalHold.indexOf(id), 1); // remove from intervalHold array
        return target.apply(thisArg, args);
    }
});


function tick(that) {
    let now = Date.now();
    let dt = Math.max(0, Math.min(36000, (now - that.player.lastUpdate) / 1000));

    let timeMult = 1;
    that.player.lastUpdate = now;
    if (dt > 5) {
        while (dt > 5) {
            resourceGain(that, 5 * timeMult);
            dt -= 5
        }
        resourceGain(that, dt * timeMult);
        that.player.offlinetick = Date.now()
    } else if (dt <= 5) {
        resourceGain(that, dt * timeMult);
    }

}

const PathApp =  {
    data () {
        return {
            player: player
        }
    },
    mounted () {
        interval(this.tick, 50);
    },
    methods: {
        format(number) {
            return format(number);
        },
        barWidth(number) {
            return (number.current.div(number.max).mul(100) + "%");
        },
        tick() {
            tick(this);
        }
    }
}

const app = Vue.createApp(PathApp);
