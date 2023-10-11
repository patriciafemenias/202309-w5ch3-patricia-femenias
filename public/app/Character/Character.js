class Character {
  name;
  family;
  age;
  isAlive = true;
  series = "Juego de Tronos";

  die() {
    this.isAlive = false;
  }

  comunicate() {
    return `Hi!`;
  }
}

export default Character;
