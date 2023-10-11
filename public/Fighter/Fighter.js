import Character from "../Character/Character.js";

class Fighter extends Character {
  weapon;
  skills;

  comunicate() {
    return `${super.comunicate} First I punch and then I ask!`;
  }
}

export default Fighter;
