app.component('skillbar', {
    props: [
        'name'
    ],
    methods: {
        skillEquipDrag(ev, name) {
            ev.dataTransfer.setData("name", name);
        }
    },
    computed: {
        skill: function() {
            return player.skills[this.name];
        },
        label: function() {
            return format(this.skill.current) + "/" + format(this.skill.max) + (this.skill.increase.neq(0) ? " (" + format(this.skill.increase,2) + "/s)" : "");
        },
        barWidth: function() {
            return (this.skill.current.div(this.skill.max).mul(100) + "%");
        },
        levelName: function() {
            return skillLevelNames[this.skill.level]
        },
        iconName: function() {
            if ('icon' in this.skill)
                return this.skill.icon;
            else 
                return "fa-expand"
        }
    },
    template: `
        <div class="row align-items-center" draggable=true @dragstart="skillEquipDrag($event, name)">
        <i class="col-1 fas " v-bind:class="iconName" style="font-size:1.5rem"></i>
        <div class="col">
            <div class="row">{{skill.name}} - {{levelName}}</div>
            <div class="row progress position-relative">
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
