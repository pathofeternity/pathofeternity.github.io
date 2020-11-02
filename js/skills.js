class skill {
    constructor (name, description, type, icon) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.level = new Decimal("0");
        this.experience = new Decimal("0");
        this.tnl = new Decimal("10");
        this.percent = 0;
        this.damage = new Decimal("1");
        this.icon = icon;
    };

    addExp(number) {
        this.experience = this.experience.add(number);
    }
}

class cultivationProficiency extends skill {
    constructor() {
        super("Cultivation Proficiency", "Increases cultivation proficiency.  Profound.", "cultivation", "fa-dharmachakra");
    }

    modifyCultivationBase(input) {
        return new Decimal("5");
    }
}

var skillslist = {
    'cultivation-proficiency': new cultivationProficiency(),
    'burn-things': new skill("Burn Things", "Unleash your inner pyro.  Sizzling.", "attack", "fa-fire"),
}

player.addSkill('cultivation-proficiency');
player.addSkill('burn-things');