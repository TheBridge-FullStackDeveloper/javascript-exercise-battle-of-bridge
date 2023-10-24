class Player {
  constructor(name, life, attack) {
    this.name = name;
    this.life = life;
    this.attack = attack;
  }
  attackPlayer(player, diceValue) {
    if (this.isDead()) {
      return;
    }
    player.life -= this.attack * diceValue;
  }
  isDead() {
    return this.life <= 0;
  }
}
