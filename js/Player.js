class Player {
    constructor(name, life, attack){
        this.name = name;
        this.life = life;
        this.attack = attack;
    }
    attackPlayer(enemy, diceValue) {
        if (this.isDead()) {
          return;
        }
    
        const damage = this.attack * diceValue;
        enemy.life -= damage;
    
        if (enemy.life < 0) {
          enemy.life = 0;
        }
    
        if (enemy.isDead()) {
        }
      }
    
      isDead() {
        return this.life === 0;
      }
}
