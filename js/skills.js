class skill {
    constructor (name, description, type) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.level = new Decimal("0");
        this.experience = new Decimal("0");
        this.tnl = new Decimal("10");
        this.percent = 0;
        this.damage = new Decimal("1");
    };

    addExp(number) {
        this.experience = this.experience.add(number);
    }
}

var skillslist = {
    'cultivation-proficiency': new skill("Cultivation Proficiency", "Increases cultivation proficiency.  Profound.", "cultivation"),
    'burn-things': new skill("Burn Things", "Unleash your inner pyro.  Sizzling.", "attack"),
}

player.addSkill('cultivation-proficiency');
player.addSkill('burn-things');