class Player {
    constructor(name, life, attack){
        this.name = name;
        this.life = life;
        this.attack = attack;
    }
    attackPlayer(enemy){
        enemy.life -= this.attack
    }
}

