import Character from "../Character/Character.js";

class King extends Character {
  yearsOfReign;

  constructor(name, family, series, yearsOfReign) {
    super(name, family, series);
    this.yearsOfReign = yearsOfReign;
  }

  comunicate() {
    return `${super.comunicate} You all are gonna die!`;
  }
}

export default King;
