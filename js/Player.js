class Player {
  constructor(name, life, attack) {
    this.name = name;
    this.life = life;
    this.attack = attack;
  }

  attackPlayer(enemy, diceValue) {
    let attack;

    if(this.isDead()) {
      this.life = 0;
    } else {
      attack = this.attack * diceValue;
      enemy.life -= attack;
    }
  }

  isDead() {
    return this.life <= 0;
  }
}