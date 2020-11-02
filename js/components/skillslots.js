app.component('skillslots', {
    props: [
        'type',
        'name',
    ],
    methods: {
        iconName: function(skill) {
            if ('icon' in player.skills[skill])
                return player.skills[skill].icon;
            else 
                return "fa-expand"
        },
        unequipSkill: function(skill) {
            player.unequipSkill(skill);
        },
        skillName: function(skill) {
            return player.skills[skill].name;
        },
    },
    computed: {
        emptySlots: function() {
            return player.equipSlots[this.type].slots - player.equipSlots[this.type].skills.length;
        },
        skillSlots: function() {
            return player.equipSlots[this.type].skills
        },
    },
    template: `
        <div class="row">
            <h5>{{name}}</h5>
        </div>
        <div class="row align-items-center" v-for='skill in skillSlots'>
            <div class="col">
                <i class="fas" :class="iconName(skill)" @click="unequipSkill(skill)" style="font-size:1.5rem"></i>{{skillName(skill)}}
            </div>
        </div>
        <div class="row" v-for='n in emptySlots'>
            <div class="col">
                <i class="fas fa-expand" style="font-size:1.5rem"></i>Drag skill here to equip
            </div>
        </div>
        `
})
