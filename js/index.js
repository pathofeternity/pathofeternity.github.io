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


function tick() {
    let now = Date.now();
    let dt = Math.max(0, Math.min(36000, (now - player.lastUpdate) / 1000));

    let timeMult = 1;
    player.lastUpdate = now;
    if (dt > 5) {
        while (dt > 5) {
            resourceGain(5 * timeMult);
            dt -= 5
        }
        resourceGain(dt * timeMult);
        player.offlinetick = Date.now()
    } else if (dt <= 5) {
        resourceGain(dt * timeMult);
    }

}

function startBreakthrough(level) {
    if (level == 0)
        startEvent(new breakthroughE1())
}

function startEvent(newEvent) {
    player.currentEvent = newEvent;
    player.inEvent = true;
}

function endEvent() {
    player.inEvent = false;
    player.currentEvent = {};
}

function showModal(title,text) {
    player.modalTitle = title;
    player.modalText = text;
    const body = document.querySelector("body");
    player.modalActive = true;
    body.classList.add("modal-open")
    setTimeout(() => (player.modalOpen = true), 10);
}

function hideModal() {
    const body = document.querySelector("body");
    player.modalActive = false;
    body.classList.remove("modal-open");
    setTimeout(() => (player.modalOpen = false), 10);
}

function initialize() {
    player.initializeSkills();

    if (!loadGame()) {
        showModal("The Story Begins...", "After a long day working in the fields, you relax on a chair watching the sunset peacefully. Tonight though, the last few rays of sunlight seem to twinkle off of something hanging in the air. You grab at the speck of light and when it touches your hand, you feel a strand of warmth enter your body. This feeling is quite pleasant, so you start to gather every speck you can see nearby.");
    }
    interval(this.tick, 50);
}

const PathApp =  {
    mounted () {
        initialize();
    },
    methods: {
        format(number) {
            return format(number);
        },
        barWidth(number) {
            return (number.current.div(number.max).mul(100) + "%");
        },
        tick() {
            tick();
        }
    }
}

const app = Vue.createApp(PathApp);
app.config.globalProperties.player = player;
