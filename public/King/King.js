import Character from "../Character/Character.js";

class King extends Character {
  yearsOfReign;

  comunicate() {
    return `${super.comunicate} You all are gonna die!`;
  }
}

export default King;