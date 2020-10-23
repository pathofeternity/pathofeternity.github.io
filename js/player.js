const player = Vue.reactive({
    lastUpdate: Date.now(),
    level: 0,

    cultivation: {
        max: new Decimal("10"),
        current: new Decimal("0"),
        increase: new Decimal("1"),
        percent: 100,
    },
    body: {
        name: "Body",
        max: new Decimal("10"),
        current: new Decimal("10"),
        increase: new Decimal("0"),
        percent: 0,
    },
    mind: {
        name: "Mind",
        max: new Decimal("10"),
        current: new Decimal("10"),
        increase: new Decimal("0"),
        percent: 0,
    },
    soul: {
        name: "Soul",
        max: new Decimal("10"),
        current: new Decimal("10"),
        increase: new Decimal("0"),
        percent: 0,
    },

    skills: [],
    inEvent: false,
    currentEvent: {},
});

