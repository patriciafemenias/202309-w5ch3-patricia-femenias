import Character from "../Character/Character.js";

class Adviser extends Character {
  advisory;

  comunicate() {
    return `${super.comunicate} I dont know why, but I think I will die soon!`;
  }
}

export default Adviser;
