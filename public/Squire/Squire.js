import Character from "../Character/Character.js";

class Squire extends Character {
  suckUpGrade;
  squireSir;

  comunicate() {
    return `${super.comunicate} I'm a loser!`;
  }
}

export default Squire;
