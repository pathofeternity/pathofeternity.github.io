class skill {
    constructor (name, description, type, icon) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.level = new Decimal("0");
        this.percent = 0;
        this.damage = new Decimal("1");
        this.icon = icon;
        this.max = new Decimal("10");
        this.current = new Decimal("0");
        this.increase = new Decimal("1");
        this.baseIncrease = new Decimal("1");
        this.visible = true;
    };

    addExp(number) {
        this.current = this.current.add(number);
        if (this.current.gt(this.max)) {
            this.current = this.max;
            this.increase = new Decimal("0");
        }
    }
}

class recklessAbsorption extends skill {
    constructor() {
        super("Reckless Absorption", "Increases cultivation proficiency by recklessly absorbing specks of light.  Profound.", "cultivation", "fa-spinner");
    }

    modifyCultivationBase(input) {
        return cultivationBase.add(new Decimal("4").mul(this.current.div(this.max)));
    }
}

var skillslist = {
    'reckless-absorption': new recklessAbsorption(),
    'burn-things': new skill("Burn Things", "Unleash your inner pyro.  Sizzling.", "attack", "fa-fire"),
}
