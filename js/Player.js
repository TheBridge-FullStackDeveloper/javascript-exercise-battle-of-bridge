class Player {
    constructor (name, life, attack){
    this.name = name;
    this.life = life;
    this.attack = attack;
    }
    attackPlayer(player, diceValue){
        player.life -= diceValue.value * this.attack
    }
    isDead(){
        if (this.life <= 0){
            return true
        }else{
            return false
        }
    }
}